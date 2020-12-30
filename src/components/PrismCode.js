import React, {useEffect} from "react"
import Prism from "prismjs"
import styled from "styled-components"
import "styles/vendor/prism.css"

const preTagStyles = {
	fontSize: "12px",
	margin: "0",
	maxHeight: "500px"
}

const CodeBlockHeader = styled.div`
	background: rgb(41, 55, 66);
	color: rgb(229, 229, 229);
	font-size: 0.85rem;
	font-weight: bold;
	transform: translateY(2px);
	border-radius: 0.3rem 0.3rem 0px 0px;
	padding: 8px 10px;
	font-family: sans-serif;
	line-height: 1;
	display: flex;
	justify-content: space-between;
`



const PrismCode = ({code, language, header, plugins}) => {

  useEffect(() => {
		setTimeout(() => Prism.highlightAll(), 0)
  }, [])

	return (
		<div>
			<CodeBlockHeader>{header}</CodeBlockHeader>
			<pre style={preTagStyles} className={!plugins ? "" : plugins.join(" ")}>
				<code className={`language-${language}`}>
					{code.trim()}
				</code>
			</pre>
		</div>
	)
}

export default PrismCode
