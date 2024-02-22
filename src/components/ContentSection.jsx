import { Link } from "react-router-dom";


export default function ContentSection() {
  return (
    <section className="about_section layout_padding" id="about">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="about_taital_main">
            <h1 className="about_taital" id="about">
              About hidden gems
            </h1>
            <p className="about_text">
            Welcome to Hidden Gems! Prepare to embark on a journey through Sweden like never before. Our mission is simple: to inspire you to explore Sweden from a fresh perspective.
Hidden Gems uncovers the treasures often overlooked by traditional tourism. We shine a spotlight on lesser-known destinations, highlighting the charm of smaller businesses and the allure of unique experiences waiting to be discovered{" "}
            </p>
            <div className="readmore_bt">
              <a href="about.html">Read More</a>
            </div>
          </div>
          <div className="col-md-6 padding_right_0">
            <div>
              <img src="images/about-img.png" className="about_img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
