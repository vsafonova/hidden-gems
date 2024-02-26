import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Stockholm() {
  return (
    <>
      <header id="header-section" className="header_section">
        <Navbar />
      </header>
      <section className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <h1 className="about_taital">Stockholm</h1>
                <p className="about_text">
                  Welcome to Stockholm, a city brimming with hidden gems waiting
                  to be discovered! While it may not be a hidden gem itself,
                  Stockholm is home to countless treasures just waiting to be
                  explored.
                </p>
                <p className="about_text">
                  {" "}
                  For those seeking refuge from the hustle and bustle of city
                  life, we recommend Rosendals Trädgård, a charming garden cafe
                  in Djurgården nestled amidst lush greenery. Indulge in
                  homemade cakes and soups made from ingredients grown right on
                  their own land, then bask in the tranquil ambiance of their
                  garden as you enjoy a traditional Swedish fika.
                </p>
                <p className="about_text">
                  {" "}
                  Nature enthusiasts will find solace in Botaniska Trädgården in
                  Danderyd, a botanical garden that transcends the ordinary.
                  Wander freely among exotic flora and fauna, explore the
                  greenhouse cafe, and immerse yourself in the serene beauty of
                  their water-focused area adorned with stunning lotus flowers
                  and aquatic plants.{" "}
                </p>{" "}
                <p className="about_text">
                  For art aficionados, Stockholm boasts an array of spectacular
                  museums, with Fotografiska standing out as a personal
                  favourite. Located in Södermalm, Fotografiska showcases the
                  captivating works of various photographers, offering a glimpse
                  into the world through their lens. Visit in the evening for a
                  post-dinner adventure and dine at their lovely vegetarian
                  restaurant perched atop the building.
                </p>
                <p className="about_text">
                  {" "}
                  And for the best views of Stockholm, venture to
                  Skinnarviksberget in Södermalm. As the sun sets, indulge in a
                  takeaway pizza while overlooking the city skyline, serenaded
                  by the gentle hum of fellow admirers. In Stockholm, hidden
                  gems abound at every turn, inviting you to uncover the city's
                  secrets and create unforgettable memories. Come, embark on a
                  journey of exploration and discovery in the heart of Sweden's
                  capital city through Hidden Gems.
                </p>
              </div>
            </div>
            <div className="col-md-6 padding_right_0">
              <div>
                <img
                  src="src/images/Stockholm-1.webp"
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
