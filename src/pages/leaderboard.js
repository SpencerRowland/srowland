import React from "react"
import BaseLayout from "../components/baseLayout"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({data}) => (
  <BaseLayout>
    <Helmet>
        <title>Leaderboard | Spencer Rowland</title>
        <body class="base-layout leaderboard"></body>
        <script defer type="text/javascript" src="https://demo.escapekit.co/lbwidget-v2.js?lid=exy79pag"></script>
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
