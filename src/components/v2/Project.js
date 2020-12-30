import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import ProjectContent from "./ProjectContent"
import ProjectImage from "./ProjectImage"


const Container = styled(Link)`
	background: #fff;
	border-radius: .5rem;
	box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	color: rgba(5, 5, 5, 1);
	display: flex;
	height: 300px;
	margin-bottom: 36px;
	overflow: hidden;
	text-decoration: none;
	transition: all .2s;
	width: 100%;
	&:hover {
		box-shadow: 0 4px 4.1px rgba(0,0,0,0.012),0 4.9px 5.8px rgba(0,0,0,0.018),0 6.3px 8.4px rgba(0,0,0,0.029),0 8.8px 12.9px rgba(0,0,0,0.05),0 15px 23px rgba(0,0,0,0.11);
		.title img {
			transform: scale(1.1);
		}
		.projectImage {
			transform: rotate(-9deg) translate(40px, 50px) scale(1.3);
		}
	}
`


const Project = ({data}) => (
	<Container to={data.link}>
		<ProjectContent>
			<div className="title">
				<img itemProp="image" src={data.logo} alt={data.logoAlt}/>
				<h2>
					{data.title}
					<span>{data.subTitle}</span>
				</h2>
			</div>
			<p>{data.description}</p>
		</ProjectContent>
		<ProjectImage>
			<img className="projectImage" itemProp="image" src={data.image} alt={data.imageAlt}/>
		</ProjectImage>
	</Container>
)

export default Project
