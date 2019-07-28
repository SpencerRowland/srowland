import React from "react";
import Slider from "react-slick";
import studyMap from '../../images/eenash/img/study-map-425.jpg'
import lab from '../../images/eenash/img/lab-425.jpg'
import willLight from '../../images/eenash/img/the-will-light-425.jpg'
import infinityMirror from '../../images/eenash/img/infinity-mirror-425.jpg'

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
            <img src={studyMap}/>
        </div>
        <div>
            <img src={lab}/>
        </div>
        <div>
            <img src={willLight}/>
        </div>
        <div>
            <img src={infinityMirror}/>
        </div>
      </Slider>
    );
  }
}

export default CblockImageSlider
