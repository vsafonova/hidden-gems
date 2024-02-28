import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Stockholm() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <section className="about--section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about--title-main">
                <h1 className="about--title">Stockholm</h1>
                <p className="about--text">
                  Welcome to Stockholm, a city brimming with hidden gems waiting
                  to be discovered! While it may not be a hidden gem itself,
                  Stockholm is home to countless treasures just waiting to be
                  explored.
                </p> 
                <p className="about--text">
                  For those
                  <b> seeking refuge from the hustle and bustle of city life</b>
                  , we recommend exploring
                  <a href="https://maps.app.goo.gl/Ss7BHkiPVmhrL3NB9" target="_blank"> Rosendals Trädgård </a>
                  , a charming garden cafe in Djurgården nestled amidst lush
                  greenery. Indulge in homemade cakes and soups made from
                  ingredients grown right on their own land, then bask in the
                  tranquil ambiance of their garden as you enjoy a traditional
                  Swedish fika.
                </p>
                <p className="about--text">
                  Nature enthusiasts will find solace in
                  <a href="https://maps.app.goo.gl/pT3dn3gYTYd7X7yEA" target="_blank"> Botaniska Trädgården </a>
                  in Danderyd, a botanical garden that transcends the ordinary.
                  Wander freely among exotic flora and fauna, explore the
                  greenhouse cafe, and immerse yourself in the serene beauty of
                  their water-focused area adorned with stunning lotus flowers
                  and aquatic plants.
                </p>
                <p className="about--text">
                  <b>For art aficionados</b>, Stockholm boasts an array of
                  spectacular museums, with
                  <a href="https://maps.app.goo.gl/CvF5fqHV9YVA2Pnk8" target="_blank"> Fotografiska </a>
                  standing out as a personal favourite. Located in Södermalm,
                  Fotografiska showcases the captivating works of various
                  photographers, offering a glimpse into the world through their
                  lens. Visit in the evening for a post-dinner adventure and
                  dine at their lovely vegetarian restaurant perched atop the
                  building.
                </p>
                <p className="about--text">
                  And for <b>the best views of Stockholm</b>, venture to
                  <a href="https://maps.app.goo.gl/oCx6hdnCKstgJDWAA" target="_blank"> Skinnarviksberget </a>
                  in Södermalm. As the sun sets, indulge in a takeaway pizza
                  while overlooking the city skyline, serenaded by the gentle
                  hum of fellow admirers.
                </p>
                <p className="about--text">
                  In Stockholm, hidden gems abound at every turn, inviting you
                  to uncover the city's secrets and create unforgettable
                  memories. Come, embark on a journey of exploration and
                  discovery in the heart of Sweden's capital city through Hidden
                  Gems.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt-2">
              <div>
                <img
                  src="./images/stockholm-city.webp"
                  className="about--img"
                  alt="Mariaberget in södermalm. Buildings overlooking the bay and ocean."
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
