import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <header id="header-section" className="header_section">
        <Navbar />
      </header>
      <ContentSection />
      <Footer />
    </>
  );
}
