import React from "react"
import BaseLayout from "../components/baseLayout"
import Img from "gatsby-image"

export default ({data}) => (
  <BaseLayout>
    {/* <Img fixed={data.escapekitLogo.childImageSharp.fixed}/> */}
    <h1>Escape Kit</h1>
    <p>
        Escape Kit is a marketing tool built to solve the unique challenges of the escape room industry.
    </p>
    <h2>Core Features</h2>
  </BaseLayout>
)

export const query = graphql`
  query {
    escapekitLogo: file(relativePath: { eq: "escapekit-logo.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
