import React from "react";
import { Link } from "gatsby"
import Slider from "react-slick";
import gamersGeeks from '../../images/eenash/img/Gamers-Geeks-Nashville-Escape-Games-comp.jpg'
import friendsFamily from '../../images/eenash/img/Friends-Family-Nashville-Escape-Games-comp.jpg'
import travelersTourists from '../../images/eenash/img/Tourists-Nashville-Escape-Games-comp.jpg'
import dateNight from '../../images/eenash/img/Fun-Date-Night-Nashville-Escape-Games-comp.jpg'
import teamBuilding from '../../images/eenash/img/Team-Building-Nashville-Escape-Games-comp.jpg'
import specialMoments from '../../images/eenash/img/Special-Moments-Nashville-Escape-Games-comp.jpg'

// https://github.com/akiran/react-slick

class ContentSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   dotsClass: 'slider-dots'
    };
    return (
      <Slider {...settings}>
        <div className="item active">
            <div className="who-box">
                <img src={travelersTourists} className="img-responsive who-pics" alt="Nashville Escape Games for Travelers and Tourists"/>
                <div className="who-image-bottom">
                    <h3 className="who-image-text">TRAVELERS & TOURISTS</h3>
                </div>
                <div className="carousel-caption">
                    <p className="for-who-describe">You’ve seen the historic sites and walked around the streets long enough. Now you’re ready to try the latest and most exciting attraction in town. Whether you’re traveling alone or with a group, the Escape Experience - Nashville is a must stop destination. One of our escape games is something you will not want to miss and will be the most fun-filled hour you’ll have in Nashville.</p>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="who-box">
                <img src={specialMoments} className="img-responsive who-pics" alt="Nashville Escape Games for Special Moments"/>
                <div className="who-image-bottom">
                    <h3 className="who-image-text">SPECIAL MOMENTS</h3>
                </div>
                <div className="carousel-caption">
                    <p className="for-who-describe">Bachelorette Parties. Birthdays. New Year's Eve? Whatever the case, break the ice and loosen things in one of our escape games. Our escape games are sure to be an experience you'll be talking about for weeks to come. If you're celebrating and looking for something fun and hip to do in Nashville, there's an excellent chance that the Ecape Experience - Nashville is for you.</p>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="who-box">
                <img src={teamBuilding} className="img-responsive who-pics" alt="Nashville Escape Games for Teambuilding"/>
                <div className="who-image-bottom">
                    <h3 className="who-image-text">
                        <Link to="/eenash/teambuilding">TEAM BUILDING!</Link>
                    </h3>
                </div>
                <div className="carousel-caption">
                    <p className="for-who-describe">Enhance group communication and foster teamwork in our escape games while learning to work collaboratively in an action packed pursuit of shared achievement. The Escape Experience - Nashville is a proven form of corporate team building entertainment. Now this fun team building activity is available to companies in Nashville.</p>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="who-box">
                <img src={friendsFamily} className="img-responsive who-pics" alt="Nashville Escape Games for Family and Friends"/>
                <div className="who-image-bottom">
                    <h3 className="who-image-text">FRIENDS & FAMILY</h3>
                </div>
                <div className="carousel-caption">
                    <p className="for-who-describe">Break the norm! Turn off the TV and make some real-life memories together! The Escape Experience - Nashville is the perfect way to spend quality social time with family and friends. An escape game in one of our cleverly designed rooms is an experience that will not soon be forgotten.</p>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="who-box">
                <img src={dateNight} className="img-responsive who-pics" alt="Nashville Escape Games for a Fun Date Night"/>
                <div className="who-image-bottom">
                    <h3 className="who-image-text">A FUN DATE NIGHT!</h3>
                </div>
                <div className="carousel-caption">
                    <p className="for-who-describe">You took her to a dinner and movie three times already! Now the pressure's on for you to come up with something new and exciting. Lucky for you, Escape Experience - Nashville has moved to town. Show off your smarts in one of our escape games, and she’ll tell all her friends what a great date you are. Yeah, I know... You're welcome.</p>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="who-box">
                <img src={gamersGeeks} className="img-responsive who-pics" alt="Nashville Escape Games for Gamers and Geeks"/>
                <div className="who-image-bottom">
                    <h3 className="who-image-text">GAMERS & GEEKS</h3>
                </div>
                <div className="carousel-caption">
                    <p className="for-who-describe">You’re pretty smart and you’ve proven your ability to unlock that next level online. But can you perform in real life? Turn the intensity up a notch with a LIVE escape game. Pull the digital action and adventure you love online into a real-world setting. Do you have what it takes to find clues, solve ciphers, crack codes, and use your skills to escape?</p>
                </div>
            </div>
        </div>
      </Slider>
    );
  }
}

export default ContentSlider
