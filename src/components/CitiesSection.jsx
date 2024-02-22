export default function CitiesSection() {
  return (
    <div className="container">
      <h1 className="services_taital" id="cities">
        Cities
      </h1>
      <p className="services_text">
      Our curated selection of unique and lesser-known destinations invites you to delve deeper into the heart and soul of Sweden. We believe in open exploration without gatekeeping, ensuring that everyone has the opportunity to uncover the extraordinary beauty and richness that Sweden has to offer. Join us as we unlock the hidden treasures
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
