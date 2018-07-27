import React from "react";
import Slider from "react-slick";

import "./carusel.css";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="slick-slider slick-initialized">
        <Slider {...settings}>
          <div>
            <img className="Img" src="/images/react.png" alt="" />
          </div>
          <div>
            <img className="Img" src="/images/redux.png" alt="" />
          </div>
          <div>
            <img className="Img" src="/images/javascript.png" alt="" />
          </div>
          <div>
            <img className="Img" src="/images/angular.png" alt="" />
          </div>
          <div>
            <img className="Img" src="/images/antd.png" alt="" />
          </div>
          <div>
            <img className="Img" src="/images/flowjs.png" alt="" />
          </div>
          <div>
            <img className="Img" src="/images/Vue.png" alt="" />
          </div>
          <div>
            <img className="Img" src="/images/nodejs.png" alt="" />
          </div>
          <div>
            <img className="Img" src="/images/antd.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
