export default function CitiesSection() {
  return (
    <div className="container">
      <h1 className="services_taital" id="cities">
        Cities
      </h1>
      <p className="services_text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration
      </p>
      <div className="services_section_2">
        <div className="row">
          <div className="col-md-4">
            <div>
              <img src="images/img-1.png" className="services_img" />
            </div>
            <div className="btn_main">
              <a href="Stockholm.html">Stockholm</a>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src="images/img-2.png" className="services_img" />
            </div>
            <div className="btn_main active">
              <a href="Visby.html">Visby</a>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src="images/img-3.png" className="services_img" />
            </div>
            <div className="btn_main">
              <a href="Järvsö.html">Järvsö</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
