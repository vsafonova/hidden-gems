import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header id="header-section" className="header_section">
      <Navbar />
      <Banner />
    </header>
  );
}
