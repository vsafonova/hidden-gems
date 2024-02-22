import CitiesSection from "../components/CitiesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CityPage() {
  return (
    <>
      <header id="header-section" className="header_section">
        <Navbar />
      </header>
      <CitiesSection/>
      <Footer />
    </>
  );
}
