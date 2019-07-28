import React from "react";
import Slider from "react-slick";
import hallway from '../../images/eenash/img/c-block-hallway-425.jpg'
import prisonShot from '../../images/eenash/img/prison-shot-425.jpg'
import mugShot from '../../images/eenash/img/mug-shot-425.jpg'
import prisonFile from '../../images/eenash/img/prison-file-425.jpg'
import woodenBox from '../../images/eenash/img/wooden-box-425.jpg'
import specialMoments from '../../images/eenash/img/Special-Moments-Nashville-Escape-Games-comp.jpg'

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
            <img src={hallway}/>
        </div>
        <div>
            <img src={prisonShot}/>
        </div>
        <div>
            <img src={mugShot}/>
        </div>
        <div>
            <img src={prisonFile}/>
        </div>
        <div>
            <img src={woodenBox}/>
        </div>
      </Slider>
    );
  }
}

export default CblockImageSlider
