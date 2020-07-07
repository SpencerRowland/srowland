import React from "react"
import { Link } from "gatsby"

import BaseLayout from "../components/baseLayout"

const SecondPage = () => (
  <BaseLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div style={{width: "500px", height: "500px"}}>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </BaseLayout>
)

export default SecondPage
