import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headerLogo from '../../images/eenash/headerLogo.png'

// const phoneIconPadding = {
//     margin: '0 1.711px',
// }

const mapMarkerIconPadding = {
    width: '16px',
}

const addressBottomPadding = {
    marginLeft: '41px',
}

const Footer = () => (
    <div>
    <footer>
        <div class="container">
           
            
            <div class="row">
                <div class="col-md-4 column">
                    <h4>Contact Us</h4>
                    <ul class="list-unstyled">
                        <li><span><FontAwesomeIcon icon="phone"/><span class="footer-text">615-891-7929</span></span></li>
                        <li>
                            <span><FontAwesomeIcon icon="map-marker-alt" style={mapMarkerIconPadding}/><span class="footer-text">501 Union Street</span></span><br/>
                            <span style={addressBottomPadding}>Nashville, TN 37219</span>
                        </li>
                        <li>
                            <span><FontAwesomeIcon icon="envelope"/><Link className="footer-text footer-text-link" to="/eenash/contact">Email Us</Link></span>
                        </li>
                    </ul>
                </div>
                
                <div class="col-md-4 column">
                    <h4>Gift Cards &amp; Vouchers</h4>
                    <ul class="list-unstyled">
                        <li><span><FontAwesomeIcon icon="gift"/><a class="footer-text footer-text-link" href="#">Buy Gift Card</a></span></li>
                        <li><span><FontAwesomeIcon icon="gift"/><a class="footer-text footer-text-link" href="#">Buy Printable Voucher</a></span></li>
                        <li><span><FontAwesomeIcon icon="gift"/><a class="footer-text footer-text-link" href="#">Redeem Voucher</a></span></li>
                    </ul>
                </div>
                
                <div class="col-md-4 column">
                    <h4>Locations</h4>
                    <ul class="list-unstyled">
                        <li><span><FontAwesomeIcon icon="train"/><a class="footer-text footer-text-link" href="https://escapeexperience.com/chattanooga/" target="_blank">Chattanooga</a></span></li>
                        <li><span><FontAwesomeIcon icon="music"/><Link className="footer-text footer-text-link" to="/eenash/home">Nashville</Link></span></li>
                    </ul>
                </div>
    
            </div>
    
        </div>
    </footer>
    <div class="row">
        <div id="sub-footer" class="col-xs-12" >
            <div class="sub-footer-contents">
                <span class="footer-copyright">© 2019 Escape Experiences, LLC All Rights Reserved</span>
            </div>
        </div>
    </div>
    </div>
       
        
)

export default Footer
