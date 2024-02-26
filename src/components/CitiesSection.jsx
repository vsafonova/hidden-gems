import Card from "./Card";

export default function CitiesSection() {
  const cities = [
    {
      image: "stockholm.webp",
      cityName: "Stockholm",
      link: "/Stockholm",
      altText: "People sitting in a park overlooking the Old Town",
    },

    {
      image: "visby.webp",
      cityName: "Visby",
      link: "/Visby",
      altText: "Visby city from above. White houses with orange roofs overlooking the ocean.",
    },

    {
      image: "järvsö.webp",
      cityName: "Järvsö",
      link: "/Järvsö",
      altText: "Three people biking down a hill. Scenery with a lake and forest.",
    },
  ];

  return (
    <section className="cities_section layout_padding">
      <div className="container">
        <h2 className="cities_taital">Cities</h2>
        <p className="cities_text">
          Embark on a journey of discovery as you explore the hidden gems of
          Sweden, where every corner reveals a new adventure waiting to be
          uncovered
        </p>
        <div className="cities_section_2">
          <div className="row">
            {cities.map(({ image, cityName, link, altText }) => (
              <div className="col-md-4" key={cityName}>
                <Card image={image} cityName={cityName} link={link} alt={altText} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
