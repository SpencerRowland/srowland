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
      <h1>Problem solver...preferrably with code</h1>
      <Img fixed={data.headshot.childImageSharp.fixed} style={{float: 'left', margin: '.25rem 1.25rem .5rem 0'}} />
      <p>
        Hey, I'm Spencer Rowland, a full-stack developer. I fell in love with programming as an actuary when writing macros
        in Excel and I've been building ever since. Filler sentence goes here.
      </p>
      <p>
        My mission is to build things people love...whether that's on the internet or in the real world.
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
            <Link to="/escapekit">AutomatedRE</Link>
            <span>Created in 2018 and currently active</span>
          </h3>
          <p>
            Codetree was a solution borne out pain I experienced managing development tasks with GitHub issues
            across multiple repositories.
          </p>
        </li>
        <li>
          <h3>
            <Link to="/escapekit">Escape Experience - Nashville</Link>
            <span>Co-founded in 2015 and sold in 2019</span>
          </h3>
          <p>
            Codetree was a solution borne out pain I experienced managing development tasks with GitHub issues
            across multiple repositories.
          </p>
        </li>
      </ul>
    </div>
    <div className="contact">
      <h2>Get in touch</h2>
      <p>
        Follow me on <a href="https://twitter.com/spencerowland" target="_blank" rel="noopener noreferrer">Twitter</a> or email me at spencer [at] spencerrowland.com.
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
