import React from "react"
import BaseLayout from "../components/baseLayout"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

export default ({data}) => (
  <BaseLayout>
    <Helmet>
      <title>Escape Kit | Spencer Rowland</title>
      <body class="base-layout project-description"></body>
    </Helmet>

    {/* <h1><Img fixed={data.escapekitLogo.childImageSharp.fixed}/></h1> */}
    <div className="title">
      <h1>Escape Kit</h1>
      <p>
          A marketing tool built to solve the unique challenges of the escape room industry.
      </p>
    </div>
    <div className="tech-stack">
      <p>Technologies</p>
      <div className='tags'>
        <span>Python</span>
        <span>Django</span>
        <span>PostgreSQL</span>
        <span>JavaScript</span>
        <span>jQuery</span>
        <span>React</span>
        <span>SASS</span>
      </div>
    </div>
    <h2>Core Features</h2>
    <ul>
      <li>
          Digital waiver with a focus on design. Smooth animations using CSS transitions and options for
          dark and light mode. Auto populates data if returning customer.
      </li>
      <li>
          Analytics that give business owner key insights into their business. Data visualization using Chart.js.
      </li>
      <li>
          Systematically sends customer photos via text (Twilio) and email (SendGrid). Applies image overlays
          using PIL.
      </li>
      <li>
          Generates reviews and social engagement by delivering the right message at the right time through
          custom landing page builder.
      </li>
      <li>
          Integrates with Facebook and Mailchimp.
      </li>
      <li>
          Fully responsive and beautiful on any device and any browser.
      </li>
    </ul>
    <div className="buttons">
      <a href="https://www.escapekit.co/" target="_blank">View Marketing Site</a>
      <a href="https://www.escapekit.co/waiver/preview/dark-mode/" target="_blank">View Example Waiver</a>
    </div>
  </BaseLayout>
)

export const query = graphql`
  query {
    escapekitLogo: file(relativePath: { eq: "escapekit-logo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
