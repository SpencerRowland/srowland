import React, {useEffect} from "react"

export default function() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://staging.escapekit.co/lbwidget.js?lid=2zi3qzgb";
    // script.onload = () => this.scriptLoaded();  
    document.getElementById("testDiv").appendChild(script);
  }, []);

  return (
    <div id="testDiv">
      <h1>Just testingx</h1>
    </div>
  )
}
