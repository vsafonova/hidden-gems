import { Link } from "react-router-dom";

export default function Card({ image, cityName, link }) {
  return (
    <>
      <div>
        <img src={`/images/${image}`} className="services_img" />
      </div>
      <div className="btn_main">
        <Link to={link}>{cityName}</Link>
      </div>
    </>
  );
}
