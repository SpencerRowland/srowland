import React from "react"
import { Link } from "gatsby"
import EeNashLayout from "../../components/eenash/eeNashLayout"
import GoogleMap from "../../components/eenash/googleMap"
import YouTube from "../../components/eenash/youtube"
import CountdownTimer from "../../components/eenash/countdownTimer"
import ContentSlider from "../../components/eenash/contentSlider"
import { Helmet } from "react-helmet"

import mainLogo from '../../images/eenash/img/escape-experience-nashville-logo.png'
import cblockImage from '../../images/eenash/img/escape-experience-c-block-prison.jpg'
import inheritanceImage from '../../images/eenash/img/escape-experience-the-inheritance.jpg'
import vaccineImage from '../../images/eenash/img/escape-experience-vaccine.jpg'
import gamersGeeks from '../../images/eenash/img/Gamers-Geeks-Nashville-Escape-Games-comp.jpg'
import friendsFamily from '../../images/eenash/img/Friends-Family-Nashville-Escape-Games-comp.jpg'
import travelersTourists from '../../images/eenash/img/Tourists-Nashville-Escape-Games-comp.jpg'
import dateNight from '../../images/eenash/img/Fun-Date-Night-Nashville-Escape-Games-comp.jpg'
import teamBuilding from '../../images/eenash/img/Team-Building-Nashville-Escape-Games-comp.jpg'
import specialMoments from '../../images/eenash/img/Special-Moments-Nashville-Escape-Games-comp.jpg'


const HomePage = ({children}) => (
  <EeNashLayout>
    <Helmet>
      <title>Escape Experience - Nashville</title>
    </Helmet>



    <div className="row">
    <section id="main">
      <div className="container-main">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="logo">
              <img itemProp="image" src={mainLogo} alt="Escape Experience - Nashville Escape Games" className="center-block img-responsive"/>
            </div>
          </div>
        </div>
          
        <div className="row">
          <div className="escape-in-time">
              <h2>Can You Escape in Time?</h2>
          </div>
        </div>
        
        {/* Begin Countdown Clock */}
        
        {/* <div className="countdown">
          <span className="ce-minutes">59</span> : <span className="ce-seconds">59</span> : <span className="ce-mseconds"></span>
        </div> */}
        <div className="countdown">
          <CountdownTimer/>
        </div>
        
        <div className="countdown count-sm">
          {/* <span className="ce-minutes"></span> : <span className="ce-seconds"></span> */}
          <CountdownTimer/>
        </div>
        
        {/* End Countdown Clock */}
        
          
      </div>
        
    </section>
    </div>

    <div className="row book-now-row">
      <div className="book-now-row-button book-now-button">
        <a href="#">Buy Gift Card</a>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 col-xs-12 describe-what">
        <div className="describe-what-container">
          <h2 className="mobile-section-header describe-what-one-line">What is an Escape Experience?</h2>
          <h2 className="mobile-section-header describe-what-two-lines">What is an<br/>Escape Experience?</h2>
          <p>Escape Experience - Nashville is a thrilling, real-world adventure requiring one to break out of prison, solve mysteries, save mankind and escape before time runs out!<br/><br/>In other words, it is an interactive experience designed for a group of friends, family or co-workers. The objective of an escape game is simple; with only 60 mind-bending minutes you must work together, find clues, decode messages, solve problems and escape the room.</p>
        </div>
      </div>

      <div className="col-md-6 col-xs-12 promo-video">
        <h2 className="mobile-section-header promo-video-one-line">Peek inside our Escape Experiences</h2>
        <h2 className="mobile-section-header promo-video-two-lines">Peek inside our<br/>Escape Experiences</h2>
        <div className="promo-video-container">
          <div className="youtube" id="o-1jchmCJpU">
              <YouTube/>
          </div>
        </div>
      </div>
    </div>
    
    {/* Begin Escape Experiences */}
   
    <section id="escape-experiences">
      <h1 className="escape-rooms-header">NASHVILLE ESCAPE GAMES</h1>
      <div className="container">
        <div className="row">
            <div className="escape-room-row">
            <div className="escape-room-container">
                <div className="escape-room-box" id="c-block">
                    <div className="escape-room-image-top">
                        <h3 className="escape-room-image-text">C-BLOCK   |   PRISON ESCAPE ROOM</h3>
                    </div>
                    <div className="escape-room-image">
                        <img alt="Escape Experience Nashville - C-Block Prison Room" src={cblockImage}/>
                    </div>
                    <div className="escape-room-image-bottom">
                            <a href="#">BOOK C-BLOCK</a>
                    </div>
                    <p className="sub-title">Falsely Accused.<br/>Redemption Awaits.</p>
                    <div className="learn-more-button">
                        <Link to="/eenash/cblock">Learn More</Link>
                    </div>
                    <div className="escape-room-box-bottom">
                        <div className="left-half">
                            Escape Rate: <span>42%</span>
                        </div>
                        <div className="right-half">
                            Best Time: <span>36:13</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="escape-room-container">
                <div className="escape-room-box" id="the-inheritance">
                    <div className="escape-room-image-top">
                        <h3 className="escape-room-image-text">THE INHERITANCE   |   MYSTERY ESCAPE ROOM</h3>
                    </div>
                    <div className="escape-room-image">
                      <img alt="Escape Experience Nashville - The Inheritance Mystery Escape" src={inheritanceImage}/>
                    </div>
                    <div className="escape-room-image-bottom">
                            <a href="#">BOOK THE INHERITANCE</a>
                    </div>
                    <p className="sub-title">Claim What Is Rightfully Yours<br/>Before Someone Else Does</p>
                    <div className="learn-more-button">
                      <Link to="/eenash/inheritance">Learn More</Link>
                    </div>
                    <div className="escape-room-box-bottom">
                        <div className="left-half">
                            Escape Rate: <span>27%</span>
                        </div>
                        <div className="right-half">
                            Best Time: <span>36:43</span>
                        </div>
                    </div>
                </div>
            </div>

            
            

            
            <div className="escape-room-container">
                <div className="escape-room-box" id="vaccine">
                    <div className="escape-room-image-top">
                        <h3 className="escape-room-image-text">VACCINE   |   THRILLER ESCAPE ROOM</h3>
                    </div>
                    <div className="escape-room-image">
                      <img alt="Escape Experience Nashville - Vaccine Thriller Escape" src={vaccineImage}/>
                    </div>
                    <div className="escape-room-image-bottom">
                            <a href="#">BOOK VACCINE</a>
                            
                        
                            
                    </div>
                    <p className="sub-title">Save Yourself<br/>Along With The Rest Of Humanity</p>
                    <div className="learn-more-button">
                      <Link to="/eenash/vaccine">Learn More</Link>
                    </div>
                    <div className="escape-room-box-bottom">
                        <div className="left-half">
                            Escape Rate: <span>35%</span>
                        </div>
                        <div className="right-half">
                            Best Time: <span>39:19</span>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
          

              
        </div>
      </div>
    </section>
   
    {/* End Escape Experiences */}

    {/* Begin Who Should Play */}

    <section id="who-should-play">

            <div className="row">
                <div className="col-md-12 describe-who">
                    <h2 className="describe-who-one-line">Who Should Play Escape Games?</h2>
                    <h2 className="describe-who-two-lines">Who Should Play<br/>Escape Games?</h2>
                </div>
            </div>
            <div className="container who-should-play-desktop">
                
                <div className="row border-it">
                    <div className="col-sm-4 who">
                        <div className="for-who-image-area">                        
                            <img src={gamersGeeks} className="img-responsive who-pics" alt="Escape Experience - Nashville Escape Games for Gamers and Geeks"/>
                        </div>
                        <div className="for-who-titles">                        
                            <h3 className="for-who">GAMERS & GEEKS</h3>
                        </div>
                        <p className="for-who-describe">You’re pretty smart and you’ve proven your ability to unlock that next level online. But can you perform in real life? Turn the intensity up a notch with a LIVE escape game. Pull the digital action and adventure you love online into a real-world setting. Do you have what it takes to find clues, solve ciphers, crack codes, and use your skills to escape?</p>
                    </div>
                    
                    <div className="col-sm-4 who">
                        <div className="for-who-image-area">
                            <img src={friendsFamily} className="img-responsive who-pics" alt="Nashville Escape Games for Family and Friends"/>
                        </div>
                        <div className="for-who-titles">                        
                            <h3 className="for-who">FRIENDS & FAMILY</h3>
                        </div>
                        <p className="for-who-describe">Break the norm! Turn off the TV and make some real-life memories together! The Escape Experience - Nashville is the perfect way to spend quality social time with family and friends. An escape game in one of our cleverly designed rooms is an experience that will not soon be forgotten. If you're tired of just staring at screens, then an escape game at Escape Experience - Nashville is the challenge for you.</p>
                    </div>
                    
                    <div className="col-sm-4 who">
                        <div className="for-who-image-area">                        
                            <img src={travelersTourists} className="img-responsive who-pics" alt="Nashville Escape Games for Travelers and Tourists"/>
                        </div>
                        <div className="for-who-titles">                        
                            <h3 className="for-who">TRAVELERS & TOURISTS</h3>
                        </div>
                        <p className="for-who-describe">You’ve seen the historic sites and walked around the streets long enough. Now you’re ready to try the latest and most exciting attraction in town. Whether you’re traveling alone or with a group, the Escape Experience - Nashville is a must stop destination. One of our escape games is something you will not want to miss and will be the most fun-filled hour you’ll have in Nashville.</p>
                    </div>
                </div>
                
                <div className="row border-it">
                    <div className="col-sm-4 who">
                        <div className="for-who-image-area">
                            <img src={dateNight} className="img-responsive who-pics" alt="Nashville Escape Games for a Fun Date Night"/>
                        </div>
                        <div className="for-who-titles">                        
                            <h3 className="for-who">A FUN DATE NIGHT!</h3>
                        </div>
                        <p className="for-who-describe">You took her to a dinner and movie three times already! Now the pressure's on for you to come up with something new and exciting. Lucky for you, Escape Experience - Nashville has moved to town. Show off your smarts in one of our escape games, and she’ll tell all her friends what a great date you are. Yeah, I know... You're welcome.</p>
                    </div>
                    <div className="col-sm-4 who">
                        <div className="for-who-image-area">                        
                            <img src={teamBuilding} className="img-responsive who-pics" alt="Nashville Escape Games for Teambuilding"/>
                        </div>
                        <div className="for-who-titles">                        
                            <h3 className="for-who">TEAM BUILDING!</h3>
                        </div>
                        <p className="for-who-describe">Enhance group communication and foster teamwork in our escape games while learning to work collaboratively in an action packed pursuit of shared achievement. The Escape Experience - Nashville is a proven form of corporate team building entertainment. Now this fun team building activity is available to companies in Nashville.</p>
                    </div>
                      
                    <div className="col-sm-4 who">
                        <div className="for-who-image-area">
                            <img src={specialMoments} className="img-responsive who-pics" alt="Nashville Escape Games for Special Moments"/>
                        </div>
                        <div className="for-who-titles">                        
                            <h3 className="for-who">SPECIAL MOMENTS</h3>
                        </div>
                        <p className="for-who-describe">Bachelorette Parties. Birthdays. New Year's Eve? Whatever the case, break the ice and loosen things in one of our escape games. Our escape games are sure to be an experience you'll be talking about for weeks to come. If you're celebrating and looking for something fun and hip to do in Nashville, there's an excellent chance that the Ecape Experience - Nashville is for you.</p>
                    </div>
                </div>
            </div>   


    {/* Begin For Who Carousel */}

    <div id="carousel-example-generic" className="carousel slide who-should-play-mobile" data-ride="carousel">
        <ContentSlider/>
    </div>

    </section>
        
    {/* End For Who Carousel */}

    {/* End Who Should Play */}

    {/* Begin Google Map  */}
        
    <div class="row home-page-map">
      <h2>Location, Location, Location...</h2>
      <p>Conveniently located in the Arts District of Downtown Nashville, the Escape Experience is within walking distance of Broadway and all the popular Nashville venues and activities. </p>
      
      <p class="adr">
          <a href="https://www.google.com/maps/place/Escape+Experience+-+Nashville+Escape+Games/@36.1642333,-86.7816686,17z/data=!4m2!3m1!1s0x8864665872ed33e7:0x20ff8e50dec3d247" target="_blank">
              <strong>Escape Experience - Nashville</strong><br/>
              <span class="street-address">501 Union Street</span><br/>
              <span class="locality">Nashville</span>,  
              <span class="region" title="Tennessee">TN</span>&nbsp;&nbsp;
              <span class="postal-code">37219</span>
          </a>
      </p>
    </div>

    <div className="row no-gutters">
      <div id="map" className="col-md-12">
        <GoogleMap />
      </div>
    </div>
          
          
    {/* End Google Map */}
    
  </EeNashLayout>
)  

export default HomePage;
