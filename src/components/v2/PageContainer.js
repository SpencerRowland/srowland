import React from "react"
import styled from "styled-components"


const Container = styled.div`
	background: #fafafa;
	min-height: 100vh;
	overflow-x: hidden;
	width: 100%;
`


const PageContainer = ({children}) => (
	<Container>
		{children}
	</Container>
)

export default PageContainer
