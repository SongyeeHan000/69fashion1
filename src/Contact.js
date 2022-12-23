import React from "react"
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from "react-leaflet"


export default function Contact() {

  return (
    <div id='map'>
      <MapContainer center={[40.863534242891824, -73.90240507725984]} zoom={13} scrollWheelZoom={false} style={{height:'360px', width:'360px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.863534242891824, -73.90240507725984]}>
        <Popup>
          69 Fashion
        </Popup>
      </Marker>
      </MapContainer>
    </div>
    
  )
}
