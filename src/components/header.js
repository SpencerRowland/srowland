import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <main id="panel">
  <Helmet>
  <body class="eenash"></body>
  </Helmet>

  {/* Mobile Header Begin */}

  <header class="panel-header fixed">
      <button class="toggle-button">☰</button>
      <div class="mobile-header-button book-now-button">
          <a href="https://escapeexperiencenashville.com/booking">BOOK NOW</a>
      </div>
  </header>
  
  {/* Mobile Header End */}
  
  {/* Desktop Header Begin */}
  <header class="desktop-header fixed">

    <div class="top-bar container-fluid">
        <div class="top-bar-left">501 Union Street • Nashville, TN</div>
        <div class="top-bar-middle">Call Today <i class="fa fa-phone"></i> (615) 891-7929</div>
        <div class="top-bar-right">
          <a href="https://escapeexperiencenashville.com/gift-cards" class="gift"><i class="fa fa-gift"></i> Buy Gift Card</a>
        </div>
    </div>

    <div class="header-main container-fluid">
        
      <div class="header-logo">
        <a href="https://escapeexperiencenashville.com/">
          <Img sizes={this.props.data.headerImage.sizes} />
        </a>
      </div>
          
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a class="menu-item" href="https://escapeexperiencenashville.com/escape-room-nashville">Escape Rooms</a></li>
          <li><a class="menu-item" href="https://escapeexperiencenashville.com/faq">FAQ</a></li>
          <li><a class="menu-item" href="https://escapeexperiencenashville.com/teambuilding">Team Building</a></li>
          <li><a class="menu-item" href="https://escapeexperiencenashville.com/contact">Contact</a></li>

          <li class="header-social">
            <a target="_blank" href="https://www.facebook.com/EscapeExperienceNashville/">
              <i class="fa fa-facebook"></i>
            </a>
            <a target="_blank" href="https://twitter.com/EscapeExpNash">
              <i class="fa fa-twitter"></i>
            </a>
            <a target="_blank" href="https://plus.google.com/b/112497920384890790538/112497920384890790538/posts?gmbpt=true&pageId=112497920384890790538">
              <i class="fa fa-google-plus"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/escapeexperiencenashville/">
              <i class="fa fa-instagram"></i>
            </a>
          </li>

          <li class="desktop-header-book-now">
            <a href="https://escapeexperiencenashville.com/booking">Book Now</a>
          </li>
        </ul>
      </div>
        
    </div>
  </header>
  
  {/* Desktop Header End */}

  {this.props.children()}
</main>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
