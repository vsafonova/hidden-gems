import CitiesSection from "../components/CitiesSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import EmailSubscriptionPopup from "../components/Popup";

export default function MainPage() {
  return (
    <>
      <header className="header">
        <Navbar />
        <Banner />
      </header>
      <CitiesSection />
      <ContentSection showButton={true} />
      <EmailSubscriptionPopup />
      <Footer />
    </>
  );
}
