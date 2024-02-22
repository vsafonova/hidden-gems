import { Link } from "react-router-dom";

export default function Navbar() {
  // const navItems = [
  //   {
  //     linkText: "Home",
  //     href: "/",
  //   },
  //   {
  //     linkText: "Home",
  //     href: "Cities",
  //   },
  // ]
  return (
    <header className="header_main">
    <div className="mobile_menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo_mobile">
          <Link to="/">
            <img src="images/logo.png" />
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CityPage" className="nav-link">
                Cities
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutPage" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/TipsPage" className="nav-link">
                Tips
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="container-fluid">
      <div className="logo">
       <Link to="/">
          <img src="images/logo.png" />
        </Link>
      </div>
      <div className="menu_main">
        <ul>
          <li className="active">
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/CityPage">Cities</Link>
          </li>
          <li>
          <Link to="/AboutPage">About</Link>
          </li>
          <li>
          <Link to="/TipsPage">Tips</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
}