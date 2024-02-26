import { Link } from "react-router-dom";

const NavLink = ({ to, label, ariaLabel }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link" aria-label={ariaLabel}>
      {label}
    </Link>
  </li>
);

export default function Navbar() {
  return (
    <header className="header_main">
      <div className="mobile_menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo_mobile">
            <Link to="/">
              <img
                src="src/images/LogoText.png"
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
              <NavLink
                to="/"
                label="Home"
                ariaLabel="Navigate to the Home Page"
              />
              <NavLink
                to="/CityPage"
                label="Cities"
                ariaLabel="Navigate to the Cities Page"
              />
              <NavLink
                to="/AboutPage"
                label="About"
                ariaLabel="Navigate to the About Page"
              />
              <NavLink
                to="/TipsPage"
                label="Tips"
                ariaLabel="Navigate to the Tips Page"
              />
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <header>
          <div className="logo">
            <Link to="/">
              <img
                src="src/images//LogoText.png"
                width={400}
                height={400}
                alt="Hidden Gems Logo. Diamond with Horns."
              />
            </Link>
          </div>
        </header>
        <nav className="menu_main">
          <ul>
            <NavLink
              to="/"
              label="Home"
              ariaLabel="Navigate to the Home Page"
            />
            <NavLink
              to="/CityPage"
              label="Cities"
              ariaLabel="Navigate to the Cities Page"
            />
            <NavLink
              to="/AboutPage"
              label="About"
              ariaLabel="Navigate to the About Page"
            />
            <NavLink
              to="/TipsPage"
              label="Tips"
              ariaLabel="Navigate to the Tips Page"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
