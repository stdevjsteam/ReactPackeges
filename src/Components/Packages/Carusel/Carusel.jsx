import React from "react";
import Slider from "react-slick";

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
                  <img src="/images/react.png" alt="" />
                </div>
                <div>
                  <img src="/images/redux.png" alt="" />
                </div>
                <div>
                  <img src="/images/javascript.png" alt="" />
                </div>
                <div>
                  <img src="/images/angular.png" alt="" />
                </div>
                <div>
                  <img src="/images/antd.png" alt="" />
                </div>
                <div>
                  <img src="/images/flowjs.png" alt="" />
                </div>
                <div>
                  <img src="/images/Vue.png" alt="" />
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
