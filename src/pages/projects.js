import React from "react"
import BaseLayout from "../components/baseLayout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

export default ({data}) => (
  <BaseLayout>
    <Helmet>
        <title>Projects | Spencer Rowland</title>
    </Helmet>

    <div className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>
            <Link to="/escapekit">Escape Kit</Link>
            <span>Created in 2018 and currently active</span>
          </h3>
          <p>
            Escape Kit began with the mission to make a better digital waiver for the escape room industry.
            It has grown to become an automated marketing tool used by escape room businesses across the country.
          </p>
        </li>
        <li>
          <h3>
            <Link to="/automatedre">AutomatedRE</Link>
            <span>Created in 2017</span>
          </h3>
          <p>
            AutomatedRE was a solution borne out of the pain of review collection through TripAdvisor. Using selenium
            with headless chrome in Django, AutomatedRE pulls emails from a connected Mailchimp list and submits them to TripAdvisor
            Review Express.
          </p>
        </li>
        <li>
          <h3>
            <a href="/eenash/home" target="_blank">Escape Experience - Nashville</a>
            <span>Co-founded in 2015, sold in 2020</span>
          </h3>
          <p>
            The website for my escape room business was my first project to see any type of real traffic. The business site has
            changed after the sale but I have saved it here for posterity. Originally written in nothing but HTML, CSS and
            a smattering of JavaScript and JQuery. Its current iteration is in React with the help of Gatsby.
          </p>
        </li>
        <li>
          <h3>
            <a href="https://heavenlyvalettrash.com/" target="_blank" rel="noopener noreferrer">Heavenly Valet Trash</a>
          </h3>
          <p>
            A simple static website for a friend’s business. Built and designed from scratch and
            joyfully hosted on Netlify.
          </p>
        </li>
        <li>
          <h3>
            <a href="/work">View My Work</a>
          </h3>
        </li>
      </ul>
    </div>
    <div className="contact">
      <h2>Get in touch</h2>
      <p>
        Follow me on <a href="https://twitter.com/spencerowland" target="_blank" rel="noopener noreferrer">Twitter</a> or
        email me at <a href="mailto:sr@spencerrowland.com">sr@spencerrowland.com</a>.
      </p>
    </div>
  </BaseLayout>
)

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.png" }) {
      childImageSharp {
        fixed(width: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
