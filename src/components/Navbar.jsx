import { Link } from "react-router-dom";

function NavLink({ to, label, ariaLabel }) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link" aria-label={ariaLabel}>
        {label}
      </Link>
    </li>
  );
}

function Menu({ className }) {
  const navLinks = [
    {
      to: "/",
      label: "Home",
      ariaLabel: "Navigate to the Home Page",
    },
    {
      to: "/CityPage",
      label: "Cities",
      ariaLabel: "Navigate to the Cities Page",
    },
    {
      to: "/AboutPage",
      label: "About",
      ariaLabel: "Navigate to the About Page",
    },
    {
      to: "/TipsPage",
      label: "Tips",
      ariaLabel: "Navigate to the Tips Page",
    },
  ];

  return (
    <ul className={className}>
      {navLinks.map(({ to, ariaLabel, label }) => (
        <NavLink key={to} to={to} ariaLabel={ariaLabel} label={label} />
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <header className="header_main">
      <div className="mobile_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="logo_mobile">
            <Link to="/">
              <img
                src="../images/MobileLogo.png"
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
                src="./images//LogoText.png"
                width={400}
                height={400}
                alt="Hidden Gems Logo. Diamond with Horns."
              />
            </Link>
          </div>
        </header>
        <nav className="menu_main">
          <Menu />
        </nav>
      </div>
    </header>
  );
}
