import { Link } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import { Heading, StayCTA } from "../components/Design";
export default function ServiceDetails(){return <><TopBanner title="The pleasure is in the details."/><section className="section container split"><img className="experience-image" src="/images/party3.avif" alt="Restaurant and dining experience"/><div><Heading eyebrow="DINING & BEYOND" title="Pull up a chair. Stay a little longer." text="A good meal makes a good day even better. Enjoy welcoming spaces for a morning coffee, a relaxed lunch or a memorable evening."/><p>Our team can help with dining enquiries, special occasions and the details that make your visit personal. Ask about current menus, opening hours and dietary requirements before your stay.</p><Link className="button" to="/contact">Talk to our team ↗</Link></div></section><StayCTA/></>;}

