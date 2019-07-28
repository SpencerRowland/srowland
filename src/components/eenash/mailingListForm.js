import React from "react"
import { Link } from "gatsby"
import cblockImage from '../../images/eenash/img/escape-experience-c-block-prison.jpg'
import inheritanceImage from '../../images/eenash/img/escape-experience-the-inheritance.jpg'
import vaccineImage from '../../images/eenash/img/escape-experience-vaccine.jpg'

const MailingListForm = () => (
    <div className="row">
    <div id="mailing-list" className="col-md-12">
			
        <div className="row more-escape-games-row">
            <h3>Escape Experiences</h3>
            <div className="more-escape-games-container">
                <div className="more-escape-games col-sm-4">
                    <Link to="/eenash/cblock">
                        <img alt="Escape Experience Nashville - C-Block Prison Room" src={cblockImage} className="img-responsive"/>
                    </Link>
                </div>
                <div className="more-escape-games col-sm-4">
                    <Link to="/eenash/inheritance">
                        <img alt="Escape Experience Nashville - The Inheritance Mystery Escape" src={inheritanceImage} className="img-responsive"/>
                    </Link>
                </div>
                <div className="more-escape-games col-sm-4">
                    <Link to="/eenash/vaccine">
                        <img alt="Escape Experience Nashville - Vaccine Thriller Escape" src={vaccineImage} className="img-responsive"/>
                    </Link>
                </div>
            </div>
        </div>
			
        <h3>Join Our Mailing List to Receive the Latest News from Escape Experience</h3>                      

       
        {/* Begin MailChimp Signup Form */}

        <div id="mc_embed_signup">

            <form method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>

                <div id="mc_embed_signup_scroll">
                    <input type="email" value="" name="EMAIL" className="email form-control" id="mce-EMAIL" placeholder="enter email address" required/>

                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                        <input type="text" name="b_35c1025fb4fda7e0aeba9bd3b_e5849ae07a" tabindex="-1" value=""/>
                    </div>

                    <div className="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="subscribe-button"/>
                    </div>
                </div>

            </form>

        </div>

    </div>
    </div>
)

export default MailingListForm
