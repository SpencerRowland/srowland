import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import BaseLayout from "../components/baseLayout"

const SecondPage = () => (
  <BaseLayout>
    <Helmet>
        <title>Testing</title>
        <script defer type="text/javascript" src="https://www.escapekit.co/lbwidget-v2.js?lid=x0sgb9gg"></script>
    </Helmet>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div id="ek-lb">
    </div>
    <Link to="/">Go back to the homepage</Link>
  </BaseLayout>
)

export default SecondPage
