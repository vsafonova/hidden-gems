import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="mobile--menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="logo--mobile">
            <Link to="/">
              <img
                src="../images/MobileLogo.webp"
                width={50}
                height={50}
                alt="Hidden Gems Logo. Diamond with Horns."
              />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Menu className="navbar-nav" />
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <header>
          <div className="logo">
            <Link to="/">
              <img
                src="./images//LogoText.webp"
                width={400}
                height={400}
                alt="Hidden Gems Logo. Diamond with Horns."
              />
            </Link>
          </div>
        </header>
        <nav className="menu">
          <Menu />
        </nav>
      </div>
    </>
  );
}
