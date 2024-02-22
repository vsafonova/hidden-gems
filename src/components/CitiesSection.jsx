import { Link } from "react-router-dom";
import Card from "./Card";

export default function CitiesSection() {
  const cities = [
    {
      image: "img-1.png",
      cityName: "Stockholm",
      link: "/Stockholm",
    },

    {
      image: "img-2.png",
      cityName: "Visby",
      link: "/Visby",
    },

    {
      image: "img-3.png",
      cityName: "Järvsö",
      link: "/Järvsö",
    },
  ];

  return (
    <section className="services_section layout_padding" id="cities">
      <div className="container">
        <h1 className="services_taital" id="cities">
          Cities
        </h1>
        <p className="services_text">
          Embark on a journey of discovery as you explore the hidden gems of
          Sweden, where every corner reveals a new adventure waiting to be
          uncovered
        </p>
        <div className="services_section_2">
          <div className="row">
            {cities.map(({image, cityName, link}) => (
              <div className="col-md-4" key={cityName}>
                <Card image={image} cityName={cityName} link={link} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
