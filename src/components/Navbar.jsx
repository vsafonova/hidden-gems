export default function Navbar() {
  return (
    <div class="header_main">
      <div class="mobile_menu">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="logo_mobile">
            <a href="index.html">
              <img src="images/logo.png" />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#cities">
                  Cities
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">
                  About hidden gems
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="contact.html">
                  Tips
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container-fluid">
        <div class="logo">
          <a href="index.html">
            <img src="images/logo.png" />
          </a>
        </div>
        <div class="menu_main">
          <ul>
            <li class="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#cities">Cities</a>
            </li>
            <li>
              <a href="#about">About hidden gems</a>
            </li>
            <li>
              <a href="contact.html">Tips</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
