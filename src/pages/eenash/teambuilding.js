import React from "react"
import EeNashLayout from "../../components/eenash/eeNashLayout"
import MailingListForm from "../../components/eenash/mailingListForm"
import { Helmet } from "react-helmet"
import asurionImage from "../../images/eenash/img/temp/corporate_logos/asurion_80.png"
import walgreensImage from "../../images/eenash/img/temp/corporate_logos/walgreens_80.png"
import microsoftImage from "../../images/eenash/img/temp/corporate_logos/microsoft_80.png"
import hcaImage from "../../images/eenash/img/temp/corporate_logos/hca_80.png"

const TeambuildingPage = () => (
    <EeNashLayout>
      <Helmet>
        <title>Team Building Activities in Nashville | Escape Experience - Nashville</title>
        <body className="eenash"></body>
      </Helmet>


        <div className="row">
            <div className="teambuilding-page-cover teambuilding-cover">
            <div className="teambuilding-page-overlay">
                    <div className="teambuilding-image-text">
                        <h1 className="teambuilding-text-1">A BETTER WAY OF TEAM BUILDING</h1>
                        <h2 className="teambuilding-text-2">Escape the mundane and let us strengthen<br/>your team’s bonds through one of our interactive experiences.</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="row margin-adjust teambuilding-usedby-bg">
            <p className="teambuilding-usedby">used by amazing companies like...</p>
            <div className="teambuilding-trusted-container">
                <div className="trusted trusted-top col-sm-6 col-xs-12">
                    <ul>
                        <li>
                            <img src={asurionImage}/>
                        </li>
                        <li>
                            <img src={walgreensImage}/>
                        </li>
                    </ul>
                </div>
                <div className="trusted trusted-bottom col-sm-6 col-xs-12">
                    <ul>
                        <li>
                            <img src={microsoftImage}/>
                        </li>
                        <li className="hca-custom">
                            <img src={hcaImage}/>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
     
     


  
    
            
            <div className="row teambuilding-about">
                <div className="col-md-6 col-xs-12 describe-what">
                    <div className="describe-what-container">
                        <h2 className="mobile-section-header describe-what-one-line">ESCAPE EXPERIENCE TEAM BUILDING</h2>
                        <h2 className="mobile-section-header describe-what-two-lines">ESCAPE EXPERIENCE<br/>TEAM BUILDING</h2>
                        <p>We offer interactive, team building experiences that demand groups work together and communicate clearly to be successful.<br/><br/>Most importantly, team building with Escape Experience - Nashville is centered on fun which we believe is the key to forming genuine, collaborative relationships with others.<br/><br/>The end result - teams that are more productive, creative, connected and motivated.</p>
                    </div>
                </div>

                <div className="col-md-6 col-xs-12 promo-video">
                    <h2 className="mobile-section-header promo-video-one-line">Peek inside our Escape Experiences</h2>
                    <h2 className="mobile-section-header promo-video-two-lines">Peek inside our<br/>Escape Experiences</h2>
                    <div className="promo-video-container">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/o-1jchmCJpU"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            
            
    <div className="teambuilding-gradient">
        <div className="container">
        
        
            <div className="row benefits">
                <h2 className="benefits-header">BENEFITS OF ESCAPE EXPERIENCE TEAM BUILDING</h2>
                <h2 className="benefits-header-mobile mobile-section-header">BENEFITS OF ESCAPE<br/>EXPERIENCE TEAM BUILDING</h2>
                <div className="col-sm-4 benefit-desc">
                    <div className="benefit-desc-titles">                        
                        <h3 className="benefit-1">BREAK THE<br/>ICE AT WORK</h3>
                        <h3 className="benefit-1-mobile">BREAK THE ICE AT WORK</h3>
                    </div>
                    <p>The Escape Experience is a great activity for new employees, virtual teams as well as teams from different departments to get to know each other. Our adrenaline inducing experiences help remove the inhibitions of the workplace that can stagger creativity and team bonding. As they work together in a fun and engaging environment, your team will build relationships that get carried back to the workplace.</p>
                </div>

                <div className="col-sm-4 benefit-desc">
                    <div className="benefit-desc-titles">                        
                        <h3 className="benefit-2">INCREASE EMPLOYEE<br/>MORALE AND MOTIVATION</h3>
                        <h3 className="benefit-2-mobile">INCREASE EMPLOYEE MORALE AND MOTIVATION</h3>
                    </div>
                    <p>Employees who feel rewarded in ways other than direct compensation are more motivated to be successful, both for themselves and for their employers. And helping employees build strong human connections in fun settings outside of work boosts morale and motivates the entire team.</p>
                </div>

                <div className="col-sm-4 benefit-desc">
                    <div className="benefit-desc-titles">                        
                        <h3 className="benefit-3">IMPROVE TEAM<br/>COMMUNICATION</h3>
                        <h3 className="benefit-3-mobile">IMPROVE TEAM COMMUNICATION</h3>
                    </div>
                    <p>The Escape Experience is a hands on team building activity that improves workplace communication by placing your team in a scenario that demands real teamwork, collaboration and problem solving skills to be successful. The Escape Experience builds heightened communication skills by applying an element of time pressure in a highly-energized environment and will leave your team talking about their experience long after it’s over.</p>
                </div>

            </div>
            
            <div className="teambuilding-contact-us">
                <h2 className="title-area">CONTACT US TODAY</h2>
                <p>Looking to book your next team building event? Then you're in the right place.<br/><br/>Complete the form below or call us at (615) 891-7929 and you're one step closer to an unforgettable experience for you and your team.</p>
            </div> 

            <form role="form" id="contactForm" className="teambuilding-contact-form" method="post" action="">
                <div className="form-group teambuilding-form">
                    <div className="form-fields">
                        <input type="text" className="form-control teambuilding-form-control" id="name" name="name" placeholder="Name" value="" required/>
                    </div>
                    <div className="form-fields">
                        <input type="email" className="form-control teambuilding-form-control" id="email" name="email" placeholder="Email Address" value="" required/>
                    </div>
                    <div className="form-fields">
                        <input type="text" className="form-control teambuilding-form-control" id="company-name" name="company-name" placeholder="Company Name" value="" required/>
                    </div>
                    <div className="form-fields">
                        <input type="text" className="form-control teambuilding-form-control" id="preferred-date" name="preferred-date" placeholder="Preferred Date (if known)" value="" required/>
                    </div>
                    <div className="form-fields">
                        <input type="text" className="form-control teambuilding-form-control" id="participant-count" name="participant-count" placeholder="Estimated Number of Participants (if known)" value="" required/>
                    </div>


                    <div className="form-fields">
                        <textarea rows="6" className="form-control teambuilding-form-control" name="message" placeholder="Message..." required></textarea>
                    </div>
                    <div className="form-fields">
                        <button id="submit" name="submit" type="submit" className="btn send-message teambuilding-send-message">Send Message</button>
                    </div>
                </div>
            </form>
            
            
            
            
            
        </div>
    </div>
      
    <MailingListForm/>
    
    </EeNashLayout>
)

export default TeambuildingPage
