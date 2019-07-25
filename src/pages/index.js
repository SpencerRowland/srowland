import React from "react"
import BaseLayout from "../components/baseLayout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({data}) => (
  <BaseLayout>
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
            <a href="#">Escape Kit</a>
            <span>Created in 2018 and currently active</span>
          </h3>
          <p>
            Drip began with the mission to fix email capture and follow-up sequences. It grew to become a lightweight
            marketing automation tool and later on a leading automation platform used by thousands of companies.
          </p>
        </li>
        <li>
          <h3>
            <a href="#">AutomatedRE</a>
            <span>Created in 2018 and currently active</span>
          </h3>
          <p>
            Codetree was a solution borne out pain I experienced managing development tasks with GitHub issues
            across multiple repositories.
          </p>
        </li>
        <li>
          <h3>
            <a href="#">Escape Experience - Nashville</a>
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
