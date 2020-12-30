import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import { Helmet } from "react-helmet"

import MapMarker from "../images/map-marker.png"

const TOKEN = 'pk.eyJ1IjoiZXNjYXBla2l0IiwiYSI6ImNqeXZvOHk4aDBkN2MzcHBvOHdrejh1cGMifQ.yjAFT2e5BIiP3BQDH9LA0A';

class Map extends Component {
  state = { 
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 12,
    },
  } 

  onViewportChange = viewport => { 
    const {width, height, ...etc} = viewport
    this.setState({viewport: etc})
  } 

  render () { 
    const { viewport } = this.state
    const markerData = [
      {
        latitude: 36.164529,
        longitude: -86.781250,
      },
      {
        latitude: 37.78,
        longitude: -122.41,
      },
    ]
    const markers = markerData.map((row, index) => {
      return (
        <Marker latitude={row.latitude} longitude={row.longitude}>
          <img className='marker' src={MapMarker} alt="map-marker"/>
        </Marker>
      )
    })

    return (
      <div className="map-container">
        <Helmet>
          <title>Escape Room Directory</title>
          <body class="directory"></body>
        </Helmet>
        <div className='list'>

        </div>
        <div className='map'>
          <ReactMapGL
            width='100%'
            height='100%'
            maxZoom={16}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            {...viewport}
            mapboxApiAccessToken={TOKEN}
            onViewportChange={viewport => this.onViewportChange(viewport)}
          >
            {markers}
          </ReactMapGL>
        </div>
      </div>
    )
  } 
}

export default Map



