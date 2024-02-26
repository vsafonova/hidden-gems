import { Link } from "react-router-dom";

export default function Card({ image, cityName, link, altText }) {
  return (
    <>
      <div>
        <img src={`./images/${image}`} className="cities_img" alt={altText} />
      </div>
      <div className="btn_main">
        <Link to={link}>{cityName}</Link>
      </div>
    </>
  );
}
