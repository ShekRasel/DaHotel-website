import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Checking() {
  const navigate = useNavigate();
  const [dates, setDates] = useState({in:"",out:""});
  const today = new Date().toLocaleDateString("en-CA");
  return <form className="availability" onSubmit={e => { e.preventDefault(); navigate("/ourrooms?arrival="+dates.in+"&departure="+dates.out+"#rooms"); }}>
    <div className="booking-intro"><span className="eyebrow">YOUR ESCAPE AWAITS</span><h2>Find your stay</h2></div>
    <label>Arrival<input required type="date" min={today} value={dates.in} onChange={e=>setDates({in:e.target.value,out:""})}/></label>
    <label>Departure<input required type="date" min={dates.in ? new Date(new Date(dates.in).getTime()+86400000).toISOString().slice(0,10) : today} value={dates.out} onChange={e=>setDates({...dates,out:e.target.value})}/></label>
    <label>Guests<select defaultValue="2">{[1,2,3,4,5].map(n=><option key={n} value={n}>{n} {n===1?"guest":"guests"}</option>)}</select></label>
    <button className="button" type="submit">Explore rooms ↗</button>
  </form>;
}
