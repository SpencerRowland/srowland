import React from "react"
import styled from "styled-components"


const Container = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	padding: 24px;
	width: 50%;
	.title {
		align-items: center;
		display: flex;
		img {
			border-radius: 14px;
			box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
			margin-right: 16px;
			width: 56px;
			object-fit: contain;
			transition: transform .2s;
		}
		h2 {
			font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
			font-size: 18px;
			font-weight: 700;
			line-height: 1.3;
			margin: 0;
			span {
				display: block;
				font-size: 14px;
				font-weight: 400;
				color: rgba(5, 5, 5, .7);
				margin-top: 4px;
			}
		}
	}
	p {
		align-items: center;
		display: flex;
		flex: 1 1 0;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		line-height: 1.6;
		margin: 0;
	}
`


const ProjectContent = ({children}) => (
	<Container>
		{children}
	</Container>
)

export default ProjectContent
