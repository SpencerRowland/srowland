import React from "react"
import BaseLayout from "../components/baseLayout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default ({data}) => (
  <BaseLayout>
    <Helmet>
        <title>Leaderboard | Spencer Rowland</title>
        <body class="base-layout leaderboard"></body>
        <script async type="text/javascript" src="https://www.escapekit.co/lbwidget-v2.js?lid=9rx23lxq"></script>
    </Helmet>
    
    <div className="bio">
      <h2>Escape Kit Leaderboard Widget</h2>
      <div id="ek-lb"></div>
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
