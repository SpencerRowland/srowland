import React from "react"
import BaseLayout from "../components/baseLayout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <BaseLayout>
    <Helmet>
        <title>Spencer Rowland</title>
    </Helmet>
    <div className="bio">
      <h1>Problem solver...<br/>preferrably with code</h1>
      <Img fixed={data.headshot.childImageSharp.fixed} className="headShot"/>
      <p>
        Hey, I'm Spencer Rowland, a full-stack developer. I fell in love with programming as an actuary when writing macros
        in Excel and I've been building ever since. I primarily work with Python/Django and Javascript.
      </p>
      <p>
        My mission is to build things people love to use...whether that's on the internet or in the real world.
      </p>
    </div>
    <div className="projects">
      <h2>Projects I've Built</h2>
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
            <span>Co-founded in 2015</span>
          </h3>
          <p>
            The website for my escape room business was my first project to see any type of real traffic. The business site has
            changed after the sale but I have saved it here for posterity. Originally written in nothing but HTML, CSS and
            a smattering of JavaScript and JQuery. Its current iteration is in React with the help of Gatsby.
          </p>
        </li>
      </ul>
    </div>
    <div className="contact">
      <h2>Get in touch</h2>
      <p>
        Follow me on <a href="https://twitter.com/spencerowland" target="_blank" rel="noopener noreferrer">Twitter</a> or email me at sr [at] spencerrowland.com.
      </p>
    </div>
  </BaseLayout>
)

export default IndexPage

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
