import { Link } from "react-router-dom";

export default function CitiesSection() {

const cities = [
  {
    srcImage: 'images/img-1.png',
    cityName: 'Stockholm'
  },

  {
    srcImage: 'images/img-2.png',
    cityName: 'Visby'
  },

  {
    srcImage: 'images/img-3.png',
    cityName: 'Järvsö'
  },
]




  return (
    <section className="services_section layout_padding" id="cities">
      <div className="container">
        <h1 className="services_taital" id="cities">
          Cities
        </h1>
        <p className="services_text">
        Embark on a journey of discovery as you explore the hidden gems of Sweden, where every corner reveals a new adventure waiting to be uncovered</p>
        <div className="services_section_2">
          <div className="row">
            <div className="col-md-4">
              <div>
                <img src="images/img-1.png" className="services_img" />
              </div>
              <div className="btn_main">
                <Link to="/CityPage">Stockholm</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src="images/img-2.png" className="services_img" />
              </div>
              <div className="btn_main">
                <Link to="/CityPage">Visby</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src="images/img-3.png" className="services_img" />
              </div>
              <div className="btn_main">
                <Link to="/CityPage">Järvsö</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
