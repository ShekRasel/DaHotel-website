import { spawn } from "node:child_process";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
const profile = await mkdtemp(join(tmpdir(), "dahotel-browser-"));
const browser = spawn("C:/Program Files/Google/Chrome/Application/chrome.exe", ["--headless=new", "--no-first-run", "--disable-gpu", "--remote-debugging-port=9334", "--user-data-dir="+profile, "about:blank"], {windowsHide:true, stdio:"ignore"});
const delay = ms => new Promise(r=>setTimeout(r,ms));
let ws;
try {
  let pages;
  for(let i=0;i<40;i++){try{pages=await (await fetch("http://127.0.0.1:9334/json")).json();break;}catch{await delay(250);}}
  ws=new WebSocket(pages.find(p=>p.type==="page").webSocketDebuggerUrl);
  await new Promise(r=>ws.addEventListener("open",r,{once:true}));
  let id=0; const pending=new Map(); const errors=[];
  ws.addEventListener("message",e=>{const m=JSON.parse(e.data);if(m.id){pending.get(m.id)?.(m);pending.delete(m.id);}if(m.method==="Runtime.exceptionThrown")errors.push(m.params.exceptionDetails.text+" "+JSON.stringify(m.params.exceptionDetails.exception));});
  const send=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;const timeout=setTimeout(()=>reject(new Error("CDP timeout "+method)),12000);pending.set(n,m=>{clearTimeout(timeout);m.error?reject(new Error(JSON.stringify(m.error))):resolve(m.result);});ws.send(JSON.stringify({id:n,method,params}));});
  const evaluate=async expression=>(await send("Runtime.evaluate",{expression,returnByValue:true,awaitPromise:true})).result.value;
  await send("Runtime.enable"); await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride",{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
  await send("Page.navigate",{url:"http://127.0.0.1:5173/"});
  for(let i=0;i<100;i++){if(await evaluate('!!document.querySelector("main h1")'))break;await delay(200);}
  await mkdir("artifacts",{recursive:true});
  const reports=[];
  for(const width of [1440,390]){
    await send("Emulation.setDeviceMetricsOverride",{width,height:900,deviceScaleFactor:1,mobile:width<600});
    for(const route of ["/","/about","/ourrooms","/services","/blogs","/contact","/gallery","/team","/price","/faq","/servicesDetails"]){
      if(await evaluate('location.pathname === '+JSON.stringify(route))) {
        await evaluate(`document.querySelector('a[href="/contact"]').click()`);
        await delay(500);
      }
      await evaluate('window.scrollTo(0,document.body.scrollHeight)');
      const clicked=await evaluate('(()=>{const a=[...document.querySelectorAll("a")].find(a=>a.getAttribute("href")==='+JSON.stringify(route)+');if(a){a.click();return true}return false})()');
      await delay(1000);
      const result=await evaluate('({path:location.pathname,heading:document.querySelector("main h1")?.textContent,scroll:scrollY,overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.querySelectorAll("main img")].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src)})');
      reports.push({width,route,clicked,...result});
      if(route==="/"||route==="/about"){
        const shot=await send("Page.captureScreenshot",{format:"png"});
        await writeFile("artifacts/"+(route==="/"?"home":"about")+"-"+width+".png",Buffer.from(shot.data,"base64"));
      }
    }
  }
  console.log(JSON.stringify({reports,errors},null,2));
  if(errors.length||reports.some(r=>!r.clicked||r.path!==r.route||!r.heading||r.scroll!==0||r.overflow||r.broken.length))process.exitCode=1;
} finally {ws?.close();browser.kill();}
