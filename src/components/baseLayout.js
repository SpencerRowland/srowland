import React from "react"
import { Helmet } from "react-helmet"
import BaseLayoutStyles from "./baseLayout.module.css"

const BaseLayout = ({children}) => (
  <div className={BaseLayoutStyles.main}>
    <Helmet>
      <body class="base-layout"></body>
    </Helmet>
    <header className={BaseLayoutStyles.header} role="banner">
      Spencer Rowland
    </header>
    {children}
  </div>
)

export default BaseLayout

// export default ({ children }) => (
//   <div className={BaseLayoutStyles.main}>
//     <header className={BaseLayoutStyles.header} role="banner">
//       Spencer Rowland
//     </header>
//     {children}
//   </div>
// )