import React from "react"
import BaseLayout from "../components/baseLayout"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

export default ({data}) => (
  <BaseLayout>
    <Helmet>
      <title>AutomatedRE | Spencer Rowland</title>
      <body class="base-layout project-description"></body>
    </Helmet>

    <div className="title">
      <h1>AutomatedRE</h1>
      <p>
          Automates the submission of emails to TripAdvisor's review collection tool (Review Express)
      </p>
    </div>
    <div className="tech-stack">
      <p>Technologies</p>
      <div className='tags'>
        <span>Python</span>
        <span>Django</span>
        <span>Selenium</span>
        <span>Headless Chrome</span>
        <span>Celery</span>
      </div>
    </div>
    <h2 style={{paddingBottom: "1rem"}}>The Problem</h2>
    <p style={{paddingBottom: "1rem"}}>
        TripAdvisor offers a review collection tool called Review Express to businesses with profiles on their site.
        It's an effective way to collect reviews for your business but it is a manual and frustrating process.
    </p>
    <p style={{paddingBottom: "1rem"}}>
        It requires gathering a list of emails and pasting them in the correct format into a HTML form field. If any
        of the emails, which could be hundreds, are not in the proper format, the form returns an error and you are left
        to search the entire list to find the problem email.
    </p>
    <p style={{paddingBottom: "1.5rem"}}>
        The process can be extremely tedious and many business owners have stopped using it out of frustration.
    </p>
    <h2 style={{paddingBottom: "1rem"}}>The Solution</h2>
    <p style={{paddingBottom: "1rem"}}>
        AutomatedRE automates the Review Express submission process.
    </p>
    <p style={{paddingBottom: "1rem"}}>
        Using celery, a scheduled task grabs any emails added to a connected MailChimp list on the previous
        day and validates that they're in the correct format. A selenium script on headless chrome then logs in
        to the user's TripAdvisor account and submits the emails to Review Express.
    </p>
  </BaseLayout>
)
