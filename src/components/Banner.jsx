export default function Banner() {
  return (
    <div className="banner_section layout_padding">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <h1 className="banner_taital">Stockholm</h1>
              <p className="banner_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have sufferedThere are ma available, but the
                majority have suffered
              </p>
              <div className="read_bt">
                <a href="Stockholm.html">Read more</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="banner_taital">Visby</h1>
              <p className="banner_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have sufferedThere are ma available, but the
                majority have suffered
              </p>
              <div className="read_bt">
                <a href="Visby.html">Read more</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="banner_taital">Järvsö</h1>
              <p className="banner_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have sufferedThere are ma available, but the
                majority have suffered
              </p>
              <div className="read_bt">
                <a href="Järvsö.html">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
