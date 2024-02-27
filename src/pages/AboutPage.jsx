import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <ContentSection showButton={false} />
      <Footer />
    </>
  );
}
