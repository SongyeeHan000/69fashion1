import React from 'react'
import Navbar from './Navigation/Navbar'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    // <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src="/dressShop1.png" className="d-block w-100" alt="dressShop1"/>
    //     </div>
    //     <div className="carousel-item">
    //       <img src="/dressShop2.png" className="d-block w-100" alt="dressShop2"/>
    //     </div>
    //     <div className="carousel-item">
    //       <img src="/dressShop3.png" className="d-block w-100" alt="dressShop3"/>
    //     </div>
    //   </div>
    //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    // <div>
    //   <div className='parent'>
    //     <img src='promdress.png' alt="backgroundpic"></img>
    //     <div className='child'>
    //       <h1>69 Fashion Inc.</h1>
    //     </div>
    //   </div>
    <div>
      <div id="homepage" style={{position:'relative'}}>
          <img src='69LogoTransparent.png' alt="backgroundpic" style={{display:'flex', padding:'2rem'}}></img>
          <h1 id='motto' style={{paddingBottom:'2rem', fontSize: 'medium'}}>Step into the spotlight with our dazzling selection of dresses!</h1>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", backgroundColor: "#2B2D42"}}>        
        {/* <Link to="/" className="homeNavbarTabs" >Home</Link> */}
        <Link to="/about" className="homeNavbarTabs">About</Link>
        <Link to="/faq" className="homeNavbarTabs">FAQ</Link>
        <Link to="/contact" className="homeNavbarTabs">Contact</Link>  

      </div>
  
     </div>

  )
}
