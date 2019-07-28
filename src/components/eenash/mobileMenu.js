import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headerLogo from '../../images/eenash/headerLogo.png'

const addressBottomMargin = {
    marginLeft: '43px',
}

const MobileMenu = () => (
    <nav id="menu">
        <Link to="/eenash/home">
            <header className="menu-header">
                <span className="menu-header-title">Escape Experience</span>
            </header>
        </Link>
        <section className="menu-section">
            <h3 className="menu-section-title">CONTACT US</h3>
            <ul className="menu-section-list">
                <li>
                    <span className="menu-section-list-item menu-icon-14"><FontAwesomeIcon icon="phone"/>615-891-7929</span>
                </li>
                <li>
                    <span className="menu-section-list-item menu-icon-105"><FontAwesomeIcon icon="map-marker-alt"/>501 Union Street</span><br/>
                    <span className="menu-section-list-item" style={addressBottomMargin}>Nashville, TN 37219</span>
                </li>
            </ul>
        </section>
        <section className="menu-section">
            <h3 className="menu-section-title">LEARN MORE ABOUT US</h3>
            <ul className="menu-section-list">
                <li>
                    <Link to="/eenash/escape-rooms">
                        <span className="menu-section-list-item menu-icon-14"><FontAwesomeIcon icon="key"/>Escape Rooms</span>
                    </Link>
                </li>
                <li>
                    <Link to="/eenash/faq">
                        <span className="menu-section-list-item menu-icon-105"><FontAwesomeIcon icon="question"/>FAQ</span>
                    </Link>
                </li>
                <li>
                    <Link to="/eenash/teambuilding">
                        <span className="menu-section-list-item menu-icon-175"><FontAwesomeIcon icon="users"/>Team Building</span>
                    </Link>
                </li>
                <li>
                    <Link to="/eenash/contact">
                        <span className="menu-section-list-item menu-icon-1575"><FontAwesomeIcon icon="comments"/>Contact</span>
                    </Link>
                </li>
                <li>
                    <span className="menu-section-list-item menu-icon-1225"><FontAwesomeIcon icon="calendar"/>Book Now</span>
                </li>
                <li>
                    <span className="menu-section-list-item menu-icon-14"><FontAwesomeIcon icon="gift"/>Buy Gift Card</span>
                </li>
            </ul>
        </section>
        <section className="menu-section">
            <h3 className="menu-section-title">EXPERIENCE OUR ESCAPE ROOMS</h3>
            <ul className="menu-section-list">
                <li>
                    <Link to="/eenash/cblock">
                        <span className="menu-section-list-item menu-icon-1225"><FontAwesomeIcon icon="lock"/>C-Block</span>
                    </Link>
                </li>
                <li>
                    <Link to="/eenash/inheritance">
                        <span className="menu-section-list-item menu-icon-1225"><FontAwesomeIcon icon="user-secret"/>The Inheritance</span>
                    </Link>
                </li>
                <li>
                    <Link to="/eenash/vaccine">
                        <span className="menu-section-list-item menu-icon-14"><FontAwesomeIcon icon="eye-dropper"/>Vaccine</span>
                    </Link>
                </li>
            </ul>
        </section>
        <section className="menu-section">
            <h3 className="menu-section-title">READ OUR RAVE REVIEWS</h3>
            <ul className="menu-section-list">
                <li>
                    <a href="https://www.tripadvisor.com/Attraction_Review-g55229-d9820229-Reviews-Escape_Experience_Nashville-Nashville_Tennessee.html" target="_blank">
                        <span className="menu-section-list-item menu-icon-1575"><FontAwesomeIcon icon={['fab', 'tripadvisor']}/>TripAdvisor</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.yelp.com/biz/escape-experience-nashville-nashville" target="_blank">
                        <span className="menu-section-list-item menu-icon-105"><FontAwesomeIcon icon={['fab', 'yelp']}/>Yelp</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/EscapeExperienceNashville/reviews" target="_blank">
                        <span className="menu-section-list-item menu-icon-875"><FontAwesomeIcon icon={['fab', 'facebook-f']}/>Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=escape%20experience%20nashville&lrd=0x8864665872ed33e7:0x20ff8e50dec3d247,1," target="_blank">
                        <span className="menu-section-list-item menu-icon-14"><FontAwesomeIcon icon={['fab', 'google']}/>Google</span>
                    </a>
                </li>
            </ul>
        </section>
        <section className="menu-section">
            <h3 className="menu-section-title">BE SOCIAL</h3>
            <ul className="menu-section-list">
                <li>
                    <a href="https://www.facebook.com/EscapeExperienceNashville/" target="_blank">
                        <span className="menu-section-list-item menu-icon-875"><FontAwesomeIcon icon={['fab', 'facebook-f']}/>Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/escapeexperiencenashville/" target="_blank">
                        <span className="menu-section-list-item menu-icon-1225"><FontAwesomeIcon icon={['fab', 'instagram']}/>Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/EscapeExpNash" target="_blank">
                        <span className="menu-section-list-item menu-icon-14"><FontAwesomeIcon icon={['fab', 'twitter']}/>Twitter</span>
                    </a>
                </li>
            </ul>
        </section>
        <section className="menu-section">
            <h3 className="menu-section-title">LOCATIONS</h3>
            <ul className="menu-section-list">
                <li>
                    <a href="https://escapeexperience.com/chattanooga/" target="_blank">
                        <span className="menu-section-list-item menu-icon-1225"><FontAwesomeIcon icon="train"/>Chattanooga</span>
                    </a>
                </li>
                <li>
                    <Link to="/eenash/home">
                        <span className="menu-section-list-item menu-icon-14"><FontAwesomeIcon icon="music"/>Nashville</span>
                    </Link>
                </li>
            </ul>
        </section>
    </nav>
)

export default MobileMenu
