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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  aria-label="Navigate to the Home Page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/CityPage"
                  aria-label="Navigate to the Cities Page"
                >
                  Cities
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/AboutPage"
                  aria-label="Navigate to the About Page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/TipsPage"
                  aria-label="Navigate to the Tips Page"
                >
                  Tips
                </Link>
              </li>
            </ul>
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
          <ul>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                aria-label="Navigate to the Home Page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/CityPage"
                aria-label="Navigate to the Cities Page"
              >
                Cities
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/AboutPage"
                aria-label="Navigate to the About Page"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/TipsPage"
                aria-label="Navigate to the Tips Page"
              >
                Tips
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
