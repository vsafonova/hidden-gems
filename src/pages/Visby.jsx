import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Visby() {
  return (    <>
    <header id="header-section" className="header_section">
      <Navbar />
    </header>
    <section className="about_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="about_taital_main">
              <h1 className="about_taital">Visby</h1>
              <p className="about_text">
              Welcome to Visby, one of the most unique cities in Sweden, where every corner feels like a journey back in time. Step into the past as you wander through streets like Fiskargränd, frozen in the charming essence of the 1600s. It's a fairy tale come to life, with climbing roses adorning the facades, beckoning you to explore its enchanting alleys.
              </p>
              <p className="about_text">
                {" "}
                If you have a penchant for nature and flowers, Botaniska trädgården awaits. Lose yourself in the meticulously kept gardens, where each step rejuvenates your soul and fills your heart with tranquillity.
              </p>
              <p className="about_text">
                {" "}
                For history buffs, Väktargången and the St. Nicolai ruin stand as poignant reminders of bygone eras, meticulously preserved and brimming with tales of yore. Journey further to Klinten and Kyrkberget, reminiscent of a small town frozen in the 1700s-1800s, once home to the humble folk of Visby. Here, by the verdant greens near the church, discover the most breathtaking lookout spots offering panoramic views of the cityscape.{" "}
              </p>{" "}
              <p className="about_text">
              In summary, Visby is a haven for those enamoured with rich history, offering a portal to bygone times for travellers seeking to traverse centuries past or simply revel in the timeless charm of their surroundings. Come, let Visby weave its spell upon you, and embark on an unforgettable odyssey through the annals of time with the guidance of Hidden Gems.
              </p>
            </div>
          </div>
          <div className="col-md-6 padding_right_0">
            <div>
              <img
                src="src/images/stockholm.webp"
                className="about_img"
                alt="About Hidden Gems"
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
