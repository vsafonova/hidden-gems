import { Link } from "react-router-dom";

export default function Carousel({city, bannerText, link}) {
   return (
      <div className="container">
        <h1 className="banner_taital">{city}</h1>
        <p className="banner_text">{bannerText}</p>
        <div className="read_bt">
          <Link to={link}>
            <span className="visually-hidden">Read more about {city}</span>
            {city}
          </Link>
        </div>
      </div>
   )
}