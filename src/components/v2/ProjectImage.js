import React from "react"
import styled from "styled-components"


const Container = styled.div`
	flex: 1 1 0;
	img {
		border-radius: 4px;
		box-shadow: 0 4px 4.1px rgba(0,0,0,0.012),0 4.9px 5.8px rgba(0,0,0,0.018),0 6.3px 8.4px rgba(0,0,0,0.029),0 8.8px 12.9px rgba(0,0,0,0.05),0 15px 23px rgba(0,0,0,0.11);
		transform: rotate(-7deg) translate(40px, 50px) scale(1.3);
		transition: all .2s;
		width: 100%;
	}
`


const ProjectImage = ({children}) => (
	<Container>
		{children}
	</Container>
)

export default ProjectImage
