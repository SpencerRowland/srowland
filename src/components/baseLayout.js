import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import BaseLayoutStyles from "./baseLayout.module.css"
import favicon16 from "../images/favicons/favicon-16x16.png";
import favicon32 from "../images/favicons/favicon-32x32.png";
import favicon96 from "../images/favicons/favicon-96x96.png";

const headerLinkStyle = {
  color: "inherit",
  border: "none",
}

const BaseLayout = ({children}) => (
  // <div className={BaseLayoutStyles.main}>
  <div className={`baseLayoutIndex ${BaseLayoutStyles.main}`}>
    <Helmet
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon96}` },
      ]}
    >
      <body className="base-layout"></body>
    </Helmet>
    <header className={BaseLayoutStyles.header} role="banner">
      <Link style={headerLinkStyle} to="/">Spencer Rowland</Link>
    </header>
    {children}
  </div>
)

export default BaseLayout
