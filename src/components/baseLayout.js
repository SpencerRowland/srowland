import React from "react"
import BaseLayoutStyles from "./baseLayout.module.css"

export default ({ children }) => (
  <div className={BaseLayoutStyles.main}>
    <header className={BaseLayoutStyles.header} role="banner">
      Spencer Rowland
    </header>
    {children}
  </div>
)