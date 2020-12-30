import React from "react"
import Project from "../../components/v2/Project"

import styled from "styled-components"

import escapeKitAdmin from '../../images/v2/escape-kit-admin.jpg'
import escapeKitDebrief from '../../images/v2/escape-kit-debrief.jpg'
import escapeKitDigitalWaiver from '../../images/v2/escape-kit-digital-waiver.jpg'
import escapeKitInsights from '../../images/v2/escape-kit-insights.jpg'
import escapeKitLeaderboards from '../../images/v2/escape-kit-leaderboards.jpg'
import escapeKitLogo from '../../images/v2/escape-kit-logo.png'
import escapeKitMarketingPage from '../../images/v2/escape-kit-marketing-page.png'
import virtualEscapes from '../../images/v2/virtual-escapes.png'
import virtualEscapesLogo from '../../images/v2/virtual-escapes-logo.jpg'


const PageContent = styled.div`
	background: #fafafa;
	min-height: 100vh;
	padding: 105px 0 0;
`
	
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
	margin: 0 auto;
  max-width: calc(720px - (30px * 2));
`


const projects = [
	{
		// link: "http://virtualescapes-env.eba-afe7bpap.us-east-2.elasticbeanstalk.com/",
		link: "/escapekit/marketing-page",
		logo: virtualEscapesLogo,
		logoAlt: "Virtual Escapes",
		title: "Virtual Escapes",
		subTitle: "",
		description: "A customizable landing page to distribute customer photos, encourage social engagement and upsale other product lines.",
		image: virtualEscapes,
		imageAlt: "Virtual Escapes",
	},
	{
		link: "/v2/escapekit/marketing-page",
		logo: escapeKitLogo,
		logoAlt: "Escape Kit",
		title: "Escape Kit",
		subTitle: "Marketing Page",
		description: "An detailed look into the redesign of the Escape Kit marketing page.",
		image: escapeKitMarketingPage,
		imageAlt: "Escape Kit Marketing Page",
	},
	{
		// link: "https://demo.escapekit.co/waiver/on/exy79pag/",
		link: "escapekit/marketing-page",
		logo: escapeKitLogo,
		logoAlt: "Escape Kit",
		title: "Escape Kit",
		subTitle: "Digital Waiver",
		description: "A digital waiver with all the bells and whistles needed in the escape room industry. Looks beautiful and functions wonderful on any device.",
		image: escapeKitDigitalWaiver,
		imageAlt: "Escape Kit Marketing Page",
	},
	{
		// link: "https://demo.escapekit.co/debrief/exy79pag/67be6904/",
		link: "escapekit/marketing-page",
		logo: escapeKitLogo,
		logoAlt: "Escape Kit",
		title: "Escape Kit",
		subTitle: "The Debrief Page",
		description: "A customizable landing page to distribute customer photos, encourage social engagement and upsale other product lines.",
		image: escapeKitDebrief,
		imageAlt: "Escape Kit Debrief",
	},
	{
		// link: "https://demo.escapekit.co/groups/229/",
		link: "escapekit/marketing-page",
		logo: escapeKitLogo,
		logoAlt: "Escape Kit",
		title: "Escape Kit",
		subTitle: "Admin",
		description: "A customizable landing page to distribute customer photos, encourage social engagement and upsale other product lines.",
		image: escapeKitAdmin,
		imageAlt: "Escape Kit Admin",
	},
	{
		// link: "https://demo.escapekit.co/insights/",
		link: "escapekit/marketing-page",
		logo: escapeKitLogo,
		logoAlt: "Escape Kit",
		title: "Escape Kit",
		subTitle: "Insights",
		description: "A customizable landing page to distribute customer photos, encourage social engagement and upsale other product lines.",
		image: escapeKitInsights,
		imageAlt: "Escape Kit Insights",
	},
	{
		// link: "https://demo.escapekit.co/exy79pag/leaderboards/",
		link: "escapekit/marketing-page",
		logo: escapeKitLogo,
		logoAlt: "Escape Kit",
		title: "Escape Kit",
		subTitle: "Leaderboards",
		description: "A customizable landing page to distribute customer photos, encourage social engagement and upsale other product lines.",
		image: escapeKitLeaderboards,
		imageAlt: "Escape Kit Leaderboards",
	},
]

export default ({data}) => (
	<PageContent>
		<Wrapper>
			{projects.map((project, idx) => (
				<Project key={idx} data={project} />
			))}
		</Wrapper>
	</PageContent>
)
