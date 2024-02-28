import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Visby() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <section className="about--section">
        <div className="container-fluid">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="about--title-main">
                <h1 className="about--title">Visby</h1>
                <p className="about--text">
                  Welcome to Visby,
                  <b>
                    one of the most unique cities in Sweden, where every corner
                    feels like a journey back in time.
                  </b>
                  Step into the past as you wander through streets like
                  Fiskargränd, frozen in the charming essence of the 1600s. It's
                  a fairy tale come to life, with climbing roses adorning the
                  facades, beckoning you to explore its enchanting alleys.
                </p> 
                <p className="about--text">
                  If you have a <b>penchant for nature and flowers, </b>
                  <a href="https://maps.app.goo.gl/VYKdZV9MharKU1Jt6" target="_blank"> Botaniska trädgården </a>
                  awaits. Lose yourself in the meticulously kept gardens, where
                  each step rejuvenates your soul and fills your heart with
                  tranquillity.
                </p>
                <p className="about--text">
                  <b>For history buffs</b>, <a href="https://maps.app.goo.gl/5oxFVNcrJcMy4SW39" target="_blank"> Visby Ringmur </a> 
                  and the 
                  <a href="https://maps.app.goo.gl/6ZhUFsxNSQhUF8BQ9" target="_blank"> St. Nicolai </a> 
                  ruin stand as poignant reminders of bygone eras, meticulously preserved
                  and brimming with tales of yore. Journey further to Klinten
                  and Kyrkberget, reminiscent of a small town frozen in the
                  1700s-1800s, once home to the humble folk of Visby. Here, by
                  the verdant greens near the church, discover the most
                  breathtaking lookout spots offering panoramic views of the
                  cityscape.
                </p>
                <p className="about--text">
                  In summary, Visby is a haven for those enamoured with rich
                  history, offering a portal to bygone times for travellers
                  seeking to traverse centuries past or simply revel in the
                  timeless charm of their surroundings. Come, let Visby weave
                  its spell upon you, and embark on an unforgettable odyssey
                  through the annals of time with the guidance of Hidden Gems.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt-1">
              <div>
                <img
                  src="./images/visby-city.webp"
                  className="about--img"
                  alt="Visby city from above. Houses with orange roofs overlooking the ocean."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
