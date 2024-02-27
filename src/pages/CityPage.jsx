import CitiesSection from "../components/CitiesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CityPage() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <CitiesSection />
      <Footer />
    </>
  );
}
