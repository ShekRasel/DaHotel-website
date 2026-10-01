import { useState } from "react";
import HotelCarousel from "./HotelCarousel";
import { Heading } from "./Design";
export default function HotelFeatures(){const [filter,setFilter]=useState("All");return <section className="section container" id="rooms"><Heading eyebrow="ROOMS & SUITES" title="Your space to simply be." text="Find a room that feels like you. Each one brings its own view, its own character and the comfort you came for."/><div className="filters" aria-label="Room categories">{["All","Rooms","Suites"].map(f=><button key={f} aria-pressed={f===filter} className={f===filter?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div><HotelCarousel filter={filter}/></section>;}
