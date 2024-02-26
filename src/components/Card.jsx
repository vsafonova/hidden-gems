import { Link } from "react-router-dom";

export default function Card({ image, cityName, link, altText,label }) {
  return (
    <>
      <div>
        <img src={`/src/images/${image}`} className="cities_img" alt={altText} />
      </div>
      <div className="btn_main">
        <Link to={link} aria-label={label}>{cityName}</Link>
      </div>
    </>
  );
}
