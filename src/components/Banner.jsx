import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner_section layout_padding">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <h1 className="banner_taital">Stockholm</h1>
              <p className="banner_text">
                Delve into lesser-known charming spots that often remain elusive
                to the average visitor. Here, we offer you the inside scoop on
                Stockholm's best-kept secrets, those charming locales usually
                reserved for those 'in the know'
              </p>
              <div className="read_bt">
                <Link to="/Stockholm">Stockholm</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="banner_taital">Visby</h1>
              <p className="banner_text">
                Wander through narrow cobblestone streets lined with ancient
                buildings and fortified walls, where every corner tells a story
                of the city's storied past. Explore historic ruins, lush
                botanical gardens, and breathtaking viewpoints overlooking the
                Baltic Sea
              </p>
              <div className="read_bt">
                <Link to="/Visby">Visby</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="banner_taital">Järvsö</h1>
              <p className="banner_text">
                Nestled in the heart of Sweden's natural beauty. Whether you're
                seeking adrenaline-pumping adventures or peaceful moments in
                nature, Järvsö has it all
              </p>
              <div className="read_bt">
                <Link to="/Järvsö">Järvsö</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
