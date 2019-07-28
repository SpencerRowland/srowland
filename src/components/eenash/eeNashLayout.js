import React from "react"
import { Helmet } from "react-helmet"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faInstagram, faTripadvisor, faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faGift, faPhone, faMapMarkerAlt, faEnvelope, faTrain, faMusic, faKey, faQuestion, faUsers, faComments, faCalendar, faLock, faUserSecret, faEyeDropper } from '@fortawesome/free-solid-svg-icons'
import MobileHeader from './mobileHeader'
import DesktopHeader from './desktopHeader'
import Footer from './footer'
import MobileMenu from './mobileMenu'
import Slideout from 'slideout';
import favicon16 from "../../images/eenash/img/favicons/favicon-16x16.png";
import favicon32 from "../../images/eenash/img/favicons/favicon-32x32.png";
import favicon96 from "../../images/eenash/img/favicons/favicon-96x96.png";

library.add(faFacebookF, faTwitter, faInstagram, faGift, faPhone, faMapMarkerAlt, faEnvelope, faTrain, faMusic, faKey, faQuestion, faUsers, faComments, faCalendar, faLock, faUserSecret, faEyeDropper, faTripadvisor, faYelp, faGoogle);
config.autoAddCss = false

class EeNashLayout extends React.Component {
  componentDidMount() {
    var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });
    document.querySelector('.toggle-button').addEventListener('click', function() {
      slideout.toggle();
    });
  }

  render() {
    return (
      <div>
        <main id="panel">
          <Helmet
            link={[
              { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
              { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon96}` },
            ]}
          >
            <body class="eenash"></body>
          </Helmet>
          <MobileHeader/>
          <DesktopHeader/>
          
          {this.props.children}

          <Footer/>
        </main>
        <MobileMenu/>
      </div>
    )
  }
}

export default EeNashLayout
