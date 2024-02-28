import { Link } from "react-router-dom";

export default function Carousel({ city, bannerText, link }) {
  return (
    <div className="container">
      <h1 className="banner--title">{city}</h1>
      <p className="banner--text">{bannerText}</p>
      <div className="read--button">
        <Link to={link}>
          <span className="visually-hidden">Read more about {city}</span>
          {city}
        </Link>
      </div>
    </div>
  );
}
