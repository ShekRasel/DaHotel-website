import { Link } from "react-router-dom";
export default function TopBanner(props) {
  const title = Object.values(props).find(Boolean) || "DaHotel";
  return <section className="page-banner"><div className="container"><p className="eyebrow">DAHOTEL · STAY A LITTLE LONGER</p><h1>{title}</h1><nav aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>{title}</span></nav></div></section>;
}
