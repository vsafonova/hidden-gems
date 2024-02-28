import { useEffect, useState } from "react";
import Carousel from "./Carousel";

export default function Banner() {
  const citiesBanner = [
    {
      city: "Stockholm",
      bannerText:
        " Delve into lesser-known charming spots that often remain elusive to the average visitor. Here, we offer you the inside scoop on Stockholm's best-kept secrets, those charming locales usually reserved for those 'in the know'.",
      link: "/Stockholm",
    },

    {
      city: "Visby",
      bannerText:
        "Wander through narrow cobblestone streets lined with ancient buildings and fortified walls, where every corner tells a story of the city's storied past. Explore historic ruins, lush botanical gardens, and breathtaking viewpoints overlooking the Baltic Sea.",
      link: "/Visby",
    },
    {
      city: "Järvsö",
      bannerText:
        "Nestled in the heart of Sweden's natural beauty. Whether you're seeking adrenaline-pumping adventures or peaceful moments in nature, Järvsö has it all.",
      link: "/Järvsö",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const startingAnimation = citiesBanner.findIndex(
      (city) => city.city === "Stockholm"
    );

    setActiveIndex(startingAnimation);
  }, []);

  return (
    <section className="banner--section">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {citiesBanner.map(({ city, bannerText, link }, index) => (
            <div
              className={`carousel-item ${
                index === activeIndex ? " active" : ""
              }`}
              key={city}
            >
              <Carousel city={city} bannerText={bannerText} link={link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
