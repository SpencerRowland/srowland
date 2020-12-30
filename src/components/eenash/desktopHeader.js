import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headerLogo from '../../images/eenash/headerLogo.png'

const DesktopHeader = () => (
    <header className="desktop-header fixed">

        <div className="top-bar container-fluid">
            <div className="top-bar-left">501 Union Street • Nashville, TN</div>
            <div className="top-bar-middle">Call Today <FontAwesomeIcon icon="phone"/> (615) 891-7929</div>
            <div className="top-bar-right">
                {/* eslint-disable-next-line */}
                <a href="#" className="gift"><FontAwesomeIcon icon="gift"/> Buy Gift Card</a>
            </div>
        </div>

        <div className="header-main container-fluid">
            
            <div className="header-logo">
                <Link to="/eenash/home">
                    <img src={headerLogo} className="dark-logo" alt="Escape Experience - Nashville Escape Games" />
                </Link>
            </div>
                
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li><Link className="menu-item" to="/eenash/escape-rooms">Escape Rooms</Link></li>
                <li><Link className="menu-item" to="/eenash/faq">FAQ</Link></li>
                <li><Link className="menu-item" to="/eenash/teambuilding">Team Building</Link></li>
                <li><Link className="menu-item" to="/eenash/contact">Contact</Link></li>

                <li className="header-social">
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

                <li className="desktop-header-book-now">
                    {/* eslint-disable-next-line */}
                    <a href="#">Book Now</a>
                </li>
            </ul>
            </div>
            
        </div>
    </header>
)

export default DesktopHeader
