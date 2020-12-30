import React from "react"
import BaseLayout from "../components/baseLayout"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <BaseLayout>
    <Helmet>
        <title>Spencer Rowland</title>
        <body className="base-layout index"></body>
    </Helmet>
    <div className="index-content">
      <Img fixed={data.headshot.childImageSharp.fixed} className="headShot"/>
      <h1>Spencer Rowland</h1>
      <hr></hr>
      <p>Software Engineer</p>
      <ul>
        <li>
          <a href="https://twitter.com/spencerowland" target="_blank" rel="noopener noreferrer">
            <svg id="icon-905" viewBox="0 0 40 40"><path d="M36.3,10.2c-1,1.3-2.1,2.5-3.4,3.5c0,0.2,0,0.4,0,1c0,1.7-0.2,3.6-0.9,5.3c-0.6,1.7-1.2,3.5-2.4,5.1 c-1.1,1.5-2.3,3.1-3.7,4.3c-1.4,1.2-3.3,2.3-5.3,3c-2.1,0.8-4.2,1.2-6.6,1.2c-3.6,0-7-1-10.2-3c0.4,0,1.1,0.1,1.5,0.1 c3.1,0,5.9-1,8.2-2.9c-1.4,0-2.7-0.4-3.8-1.3c-1.2-1-1.9-2-2.2-3.3c0.4,0.1,1,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-1.4-0.3-2.7-1.1-3.7-2.3s-1.4-2.6-1.4-4.2v-0.1c1,0.6,2,0.9,3,0.9c-1-0.6-1.5-1.3-2.2-2.4c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3,1-3.4 c1.5,2.1,3.6,3.6,6,4.9s4.9,2,7.6,2.1c-0.1-0.6-0.1-1.1-0.1-1.4c0-1.8,0.8-3.5,2-4.7c1.2-1.2,2.9-2,4.7-2c2,0,3.6,0.8,4.8,2.1 c1.4-0.3,2.9-0.9,4.2-1.5c-0.4,1.5-1.4,2.7-2.9,3.6C33.8,11.2,35.1,10.9,36.3,10.2L36.3,10.2z"></path></svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/spencer-rowland-asa-32b9464a/" target="_blank" rel="noopener noreferrer">
            <svg id="icon-90b" viewBox="0 0 40 40"><path d="M12.1,13.8v19.1H5.7V13.8C5.7,13.8,12.1,13.8,12.1,13.8z M12.5,7.9c0,0.9-0.3,1.7-1,2.4c-0.7,0.6-1.5,0.9-2.6,0.9h0 c-1.1,0-1.9-0.3-2.5-0.9c-0.6-0.6-1-1.4-1-2.4c0-1,0.3-1.7,1-2.4S7.9,4.6,9,4.6s1.9,0.3,2.6,0.9S12.5,6.9,12.5,7.9z M35,22v11h-6.4 V22.7c0-1.4-0.3-2.4-0.8-3.2c-0.5-0.8-1.3-1.1-2.4-1.1c-0.8,0-1.5,0.2-2,0.7c-0.5,0.4-1,1-1.2,1.7c-0.1,0.4-0.2,0.9-0.2,1.6v10.7 h-6.4c0-5.1,0-9.3,0-12.5s0-5.1,0-5.7l0-0.9H22v2.8h0c0.3-0.4,0.5-0.8,0.8-1.1c0.3-0.3,0.6-0.6,1.1-1c0.5-0.4,1-0.6,1.7-0.8 c0.7-0.2,1.4-0.3,2.2-0.3c2.2,0,4,0.7,5.3,2.2C34.4,17,35,19.1,35,22L35,22z"></path></svg>          </a>
        </li>
      </ul>
    </div>
  </BaseLayout>
)

export default IndexPage

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.png" }) {
      childImageSharp {
        fixed(width: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
