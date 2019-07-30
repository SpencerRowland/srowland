import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import BaseLayoutStyles from "./baseLayout.module.css"

const headerLinkStyle = {
  color: "inherit",
  border: "none",
}

const BaseLayout = ({children}) => (
  <div className={BaseLayoutStyles.main}>
    <Helmet>
      <body class="base-layout"></body>
    </Helmet>
    <header className={BaseLayoutStyles.header} role="banner">
      <Link style={headerLinkStyle} to="/">Spencer Rowland</Link>
    </header>
    {children}
  </div>
)

export default BaseLayout
