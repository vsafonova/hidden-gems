import { Link } from "react-router-dom";

export default function Card({ image, cityName, link, altText, label }) {
  return (
    <>
      <div>
        <img src={`./images/${image}`} className="cities--img" alt={altText} />
      </div>
      <div className="city--button">
        <Link to={link} aria-label={label}>
          {cityName}
        </Link>
      </div>
    </>
  );
}