import React from "react"
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from "react-leaflet"


export default function Contact() {

  return (
    <div style={{marginTop:'2rem'}}>
      <h1 style={{textAlign:'center'}}>Contact Us</h1>
      <div style={{textAlign:'center', margin:'2rem'}}>
        {/* Add a link to a email form */}
        <p>If there are any other questions, please either call us or send us a message here!</p>
        <p>Other than that, Come visit us! Looking forward to see you!</p>
      </div>

      <div className="contactContent" style={{display:'flex', justifyContent:'center'}}>
        <div id="address" style={{margin: '0rem 5rem'}}>
          <h5>Location:</h5>
            <p>39 W Fordham Rd, The Bronx, NY 10468</p>
        </div>
        <div id="phone" style={{margin: '0rem 5rem'}}>
          <h5>Phone:</h5>
          <p>718-220-6969</p>
        </div>
       
        <div id="hours" style={{margin: '0rem 5rem'}}>
          <h5>Hours:</h5>
          <p>Monday-Sunday: 12pm - 6:30pm</p>
        </div>
       
       

      </div>
      <div id='map'>
        <MapContainer center={[40.863534242891824, -73.90240507725984]} zoom={13} scrollWheelZoom={false} style={{height:'360px', width:'80%', left: '50%', transform: 'translateX(-50%)'}}>
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

    </div>
    
    
  )
}
