import { Link } from "react-router-dom";
import Checking from "./Checking";
export default function Hero() {
  return <><section className="hero"><div className="container hero-content"><p className="eyebrow">A STAY TO REMEMBER</p><h1>Some places stay<br/>with <em>you.</em></h1><p>A considered escape. A slower pace.<br/>Welcome to your own little world at DaHotel.</p><Link className="button light" to="/ourrooms">Discover our rooms <span>↗</span></Link><div className="hero-caption"><span>COMFORT, WITH CHARACTER</span><span>01 — THE DAHOTEL EXPERIENCE</span></div></div></section><div className="container booking-wrap"><Checking /></div></>;
}
