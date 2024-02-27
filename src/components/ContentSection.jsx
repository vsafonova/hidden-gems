import { Link } from "react-router-dom";

export default function ContentSection({ showButton }) {
  return (
    <section className="about--section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 py-3">
            <div className="about--title-main">
              <h1 className="about--title">About Hidden Gems</h1>
              <p className="about--text"> Welcome to Hidden Gems! </p>
              <p className="about--text">
                Prepare to embark on a journey through Sweden like never before.
              </p>
              <p className="about--text">
                <b>Our mission is simple:</b> to inspire you to explore Sweden
                from a fresh perspective. <br />
                Hidden Gems uncovers the treasures often overlooked by
                traditional tourism. We shine a spotlight on lesser-known
                destinations, highlighting the charm of smaller businesses and
                the allure of unique experiences waiting to be discovered.
              </p>
              {showButton && (
                <div className="readmore_bt">
                  <Link
                    to="/AboutPage"
                    aria-label="Read more about Hidden Gems"
                  >
                    <span className="visually-hidden">
                      Read more about hidden gems
                    </span>
                    Read More
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img
                src="./images/About-img.webp"
                className="about--img"
                alt="Bridge over a small river leading to three small red houses in a forest."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
