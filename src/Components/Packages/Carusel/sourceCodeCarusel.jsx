const source = `import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3 className="slicker">1</h3>
          </div>
          <div>
            <h3 className="slicker">2</h3>
          </div>
          <div>
            <h3 className="slicker">3</h3>
          </div>
          <div>
            <h3 className="slicker">4</h3>
          </div>
          <div>
            <h3 className="slicker">5</h3>
          </div>
          <div>
            <h3 className="slicker">6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;`;

export default source;
