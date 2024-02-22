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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All{" "}
              </p>
              <div className="readmore_bt">
                <Link to="/AboutPage">Read More</Link>
              </div>
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
