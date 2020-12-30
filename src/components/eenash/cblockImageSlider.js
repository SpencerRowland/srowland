import React from "react";
import Slider from "react-slick";
import hallway from '../../images/eenash/img/c-block-hallway-425.jpg'
import prisonShot from '../../images/eenash/img/prison-shot-425.jpg'
import mugShot from '../../images/eenash/img/mug-shot-425.jpg'
import prisonFile from '../../images/eenash/img/prison-file-425.jpg'
import woodenBox from '../../images/eenash/img/wooden-box-425.jpg'

// https://github.com/akiran/react-slick

class CblockImageSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={hallway} alt="hallway"/>
        </div>
        <div>
          <img src={prisonShot} alt="prison"/>
        </div>
        <div>
          <img src={mugShot} alt="mug-shot"/>
        </div>
        <div>
          <img src={prisonFile} alt="prison-file"/>
        </div>
        <div>
          <img src={woodenBox} alt="wooden-box"/>
        </div>
      </Slider>
    );
  }
}

export default CblockImageSlider
