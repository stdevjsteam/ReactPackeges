const sourceCodeGalery = `import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import PropTypes from "prop-types";

export default class GalleryExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images
    };
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  onSelectImage(index, image) {
    var images = this.state.images.slice();
    var img = images[index];
    if (img.hasOwnProperty("isSelected")) img.isSelected = !img.isSelected;
    else img.isSelected = true;

    this.setState({
      images: images
    });
  }

  render() {
    return (
      <div
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          border: "1px solid #ddd",
          overflow: "auto"
        }}
      >
        <Gallery
          images={this.state.images}
          onSelectImage={this.onSelectImage}
          lightboxWidth={1536}
        />
      </div>
    );
  }
}

GalleryExample.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      isSelected: PropTypes.bool
    })
  ).isRequired
};

GalleryExample.defaultProps = {
  images: [
    {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      thumbnail:
        "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 320,
      caption: "8H (gratisography.com)"
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail:
        "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      caption: "286H (gratisography.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
      thumbnail:
        "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
      thumbnail:
        "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      isSelected: true,
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      thumbnail:
        "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 320,
      caption: "8H (gratisography.com)"
    },
    {
      src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
      thumbnail:
        "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      caption: "A photo by 贝莉儿 NG. (unsplash.com)"
    },
    {
      src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_n.jpg",
      thumbnailWidth: 226,
      thumbnailHeight: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
      thumbnail:
        "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 179,
      caption: "Untitled (Jan Vasek - jeshoots.com)"
    }
  ]
};
`;

export default sourceCodeGalery;
