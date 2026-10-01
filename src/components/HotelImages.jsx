import { Link } from "react-router-dom";
export default function HotelImages(){return <section className="photo-strip" aria-label="Discover the hotel gallery">{["01","02","03","04","05"].map((n)=><Link to="/gallery" key={n}><img src={"/hotel images/ins-img-"+n+".png"} alt={"A glimpse of life at DaHotel "+n} loading="lazy"/><span>View gallery ↗</span></Link>)}</section>;}
