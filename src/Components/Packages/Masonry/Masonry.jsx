import React, { Component } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

const images = [
  {
    src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_s.jpg"
  },
  {
    src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_t.jpg"
  },
  {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_q.jpg"
  },

  {
    src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_s.jpg"
  },
  {
    src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_m.jpg"
  },
  {
    src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_s.jpg"
  },
  {
    src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg"
  },
  {
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg"
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"
  },

  {
    src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"
  },
  {
    src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg"
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg"
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg"
  },
  {
    src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg"
  },
  {
    src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg"
  }
];

class Gallery extends Component {
  render() {
    const childElements = images.map((element, index) => {
      return (
        <div className="image-element-class" key={index}>
          <img src={element.src} style={{ width: "150px" }} />
        </div>
      );
    });

    return (
      <Masonry
        className={"image-element-class"}
        options={masonryOptions}
        elementType={"div"}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        imagesLoadedOptions={imagesLoadedOptions}
      >
        {childElements}
      </Masonry>
    );
  }
}

export default Gallery;
