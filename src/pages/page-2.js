import React from "react"
import { Link } from "gatsby"

import BaseLayout from "../components/baseLayout"

const SecondPage = () => (
  <BaseLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div style={{width: "500px", height: "500px"}}>
      <script async type="text/javascript" src="http://127.0.0.1:8080/lbwidget.js?lid=0gqc4phj&debug=true"></script>
      {/* <script async type="text/javascript" src="https://www.escapekit.co/lbwidget.js?lid=x0sgb9gg"></script> */}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </BaseLayout>
)

export default SecondPage
