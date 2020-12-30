import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EeNashLayout from "../../components/eenash/eeNashLayout"
import GoogleMap from "../../components/eenash/googleMap"
import MailingListForm from "../../components/eenash/mailingListForm"
import { Helmet } from "react-helmet"

const ContactPage = () => (
    <EeNashLayout>
      <Helmet>
        <title>Contact Us Today | Escape Experience - Nashville Escape Games</title>
        <body className="eenash contact"></body>
      </Helmet>

        <div className="row">
            <div className="page-banner col-xs-12">
                <h1>
                    <span>Visit us in the Heart of Downtown Nashville</span>
                </h1>        
            </div>
        </div>

        <div className="row no-gutters">
            <div id="map" className="col-md-12">
                <GoogleMap />
            </div>
        </div>

        <section className="row contact-details">
            <div className="overlay">
                <div className="contact-details-left">
                    <div className="contact-details-sub">
                        <h3>GET IN TOUCH</h3>
                    </div>
                    <ul>
                        <li>
                            <span className="contact-info">
                                501 Union Street<br/>
                                Nashville, TN  37219
                            </span>
                        </li>
                        <li>
                            <span className="contact-info">
                                615-891-7929
                            </span>
                        </li>
                        <li>
                            <span className="contact-info contact-info-email">
                                info@escapeexperiencenashville.com
                            </span>
                        </li>
                        
                        <li className="contact-details-social">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/EscapeExperienceNashville/">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/EscapeExpNash">
                                <FontAwesomeIcon icon={['fab', 'twitter']}/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/escapeexperiencenashville/">
                                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                            </a>
                        </li>
                        <li className="driving-directions">
                            {/* eslint-disable-next-line */}
                            <a className="driving-directions-link" rel="noopener noreferrer" href="#">Driving Directions</a>
                        </li>
                    </ul>
                </div>
            
                <div id="contact-form" className="contact-details-right">
                    <div className="contact-details-sub">
                        <h3>CONTACT US TODAY</h3>
                    </div>

                
                    <form id="contactForm" method="post">
                        <div className="form-group">
                            <div className="form-fields">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Name" value="" required/>
                            </div>
                            <div className="form-fields">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" value="" required/>
                            </div>


                            <div className="form-fields">
                                <textarea rows="6" className="form-control" name="message" placeholder="Message..." required></textarea>
                            </div>
                            <div className="form-fields">
                                <button id="submit" name="submit" type="submit" className="btn send-message">Send Message</button>
                            </div>
                        </div>
                    </form>





                </div>
                
            </div>
        </section>
      
        <MailingListForm/>

    </EeNashLayout>
)

export default ContactPage
