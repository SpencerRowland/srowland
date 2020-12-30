import React from "react"
import { Link } from "gatsby"
import EeNashLayout from "../../components/eenash/eeNashLayout"
import { Helmet } from "react-helmet"

import cblockImage from '../../images/eenash/img/escape-experience-c-block-prison.jpg'
import inheritanceImage from '../../images/eenash/img/escape-experience-the-inheritance.jpg'
import vaccineImage from '../../images/eenash/img/escape-experience-vaccine.jpg'
import tripadvisorLogo from '../../images/eenash/img/tripadvisor_logo.png'
import facebookLogo from '../../images/eenash/img/facebook-logo.png'
import yelpLogo from '../../images/eenash/img/yelp-logo.png'

const sectionTopPadding = {
  paddingTop: '108px',
}

const EscapeRoomsPage = ({children}) => (
    <EeNashLayout>
      <Helmet>
        <title>Escape Rooms in Nashville - Escape Experience</title>
        <body class="eenash escape-rooms"></body>
      </Helmet>

      <section id="escape-experiences" style={sectionTopPadding}>
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
                            {/* eslint-disable-next-line */}
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
                            {/* eslint-disable-next-line */}
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
                            {/* eslint-disable-next-line */}
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
      
      <div className="book-game">
          <div className="overlay">
              <div className="book-game-wrapper">
                  <div className="experience-page-book-button">
                    {/* eslint-disable-next-line */}
                    <a href="#">Book Now</a>
                  </div>
              </div>
          </div> 
      </div>  
        
      <div className="lp-reviews-wrap">
          <div className="lp-reviews">
              <div className="lp-reviews-inner-wrap">
                  <h2>What are people saying about us?</h2>
                  <div className="lp-reviews-list-wrap">
                  <ul className="lp-reviews-list">
                      <li className="lp-reviews-content">
                          <div className="lp-reviews-cont">
                              <div className="lp-reviews-text">
                                  <p>"I’ve done other escape rooms before but this one was by far the best. Challenging enough but still a very fun experience. Luckily, we made it out with 42 seconds left. I would highly recommend this place and will definitely be back again!"</p>
                              </div>
                          </div>
                          <div className="lp-reviews-footer">
                              <h4>Laura A.</h4>
                              <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g55229-d9820229-Reviews-Escape_Experience_Nashville-Nashville_Tennessee.html" rel="noopener noreferrer">
                                  <img alt="TripAdvisor Reviews" src={tripadvisorLogo} className="lp-reviews-footer-tripadvisor"/>
                              </a>
                          </div>
                      </li>
                      <li className="lp-reviews-content">
                          <div className="lp-reviews-cont">
                              <div className="lp-reviews-text">
                                  <p>"Amazing! We have played 18 rooms in 3 states and this was the best we have played. Very fun and very realistic environment. Best way to spend an hour."</p>
                              </div>
                          </div>
                          <div className="lp-reviews-footer">
                              <h4>Eddie B.</h4>
                              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pg/EscapeExperienceNashville/reviews/">
                                  <img alt="Facebook Reviews" src={facebookLogo} className="lp-reviews-footer-facebook"/>
                              </a>
                          </div>
                      </li>
                      <li className="lp-reviews-content">
                          <div className="lp-reviews-cont">
                              <div className="lp-reviews-text">
                                  <p>"If you want the absolute BEST experience in the industry, I highly recommend this place. I have participated in many, many escape rooms all over the world as I've traveled on business and I would highly recommend Escape Experience - Nashville. Great team builder and very fun outing for friends. On a scale of 1 to 5 stars, I'd give it a six."</p>
                              </div>
                          </div>
                          <div className="lp-reviews-footer">
                              <h4>Mark R.</h4>
                              <a target="_blank" rel="noopener noreferrer" href="https://www.yelp.com/biz/escape-experience-nashville-nashville">
                                  <img alt="Yelp Reviews" src={yelpLogo} className="lp-reviews-footer-yelp"/>
                              </a>
                          </div>
                      </li>
                  </ul>
                  </div>

              </div>
              
          </div>
      </div>
      
    </EeNashLayout>
)

export default EscapeRoomsPage