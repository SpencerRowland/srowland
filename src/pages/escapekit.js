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
          A digital waiver and marketing tool built to solve the unique challenges of the escape room industry.
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
    <ul>
      <li>
        Built with Python/Django along with vanilla JS and React on the front end. Deployed
        on PythonAnywhere with PostgreSQL.
      </li>
      <li>
        <a href="https://demo.escapekit.co/waiver/on/exy79pag/" target="_blank">Fully responsive digital waiver</a> with
        wide browser compatibility and a focus on design. Heavy use of css transitions while
        keeping an eye on performance to preserve smooth transitions. <a href="https://demo.escapekit.co/waivers/1/" target="_blank">Backend</a> allows
        users to customize style, input fields, form validation and text. Generates pdf of
        waiver and emails to customers after signing. Available in English, French and Spanish.
      </li>
      <li>
        A link to the <a href="https://demo.escapekit.co/debrief/exy79pag/190a63ef/" target="_blank">“debrief page”</a> (built
        with React and Material UI) gets emailed and texted to customers after their game.
        The <a href="https://demo.escapekit.co/debrief/exy79pag/builder/" target="_blank">debrief page builder</a> (desktop
        only) allows users to customize the content and text of their debrief page.
      </li>
      <li>
        Embeddable widget allows users to install and customize the <a href="https://demo.escapekit.co/exy79pag/leaderboards/" target="_blank">leaderboard</a> on
        their website. See it in action on my personal site <a href="http://127.0.0.1:8000/leaderboard" target="_blank">here</a>.
      </li>
      <li>
        <a href="https://demo.escapekit.co/insights/" target="_blank">Data visualization</a> using Chart.js
        and data analysis using NumPy and pandas.
      </li>
      <li>
        Integrations with Twilio, SendGrid, Facebook, Mailchimp, Stripe, and AWS (S3, SES, Lambda).
      </li>
      {/* <li>
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
      </li> */}
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
