import { Link } from "react-router-dom";
export function Heading({ eyebrow, title, text }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
export function Story() {
  return <section className="section container split"><div className="story-image"><img src="/images/pexels-photo-262047.jpeg" alt="Inviting hotel restaurant with carefully set tables" loading="lazy"/><span>THE ART OF A GOOD STAY</span></div><div><Heading eyebrow="WELCOME TO DAHOTEL" title="A little distance from the everyday." text="Slow mornings. Beautiful surroundings. A warm welcome that feels personal. Discover a place designed for time well spent, whether you are here for a weekend escape or a longer stay."/><p>From your first coffee to your final evening, our spaces bring together comfort, thoughtful details and room to unwind.</p><Link className="text-link" to="/ourrooms">Find your favourite room <span>↗</span></Link></div></section>;
}
export function StayCTA() {
  return <section className="stay-cta"><div className="container"><div><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>Make room for something wonderful.</h2></div><Link className="button light" to="/ourrooms">Explore your stay ↗</Link></div></section>;
}
