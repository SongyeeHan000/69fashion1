import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav >
      {/* <div style={{display:"flex", width:"100%", justifyContent:"center",backgroundColor: "#2B2D42" }}>
        <h1 id="navBarTitle">6&9 Fashion</h1>
      </div> */}
    
      <div className="navbar-collapse collapse" id="navbar" style={{display:"flex", justifyContent:"space-evenly", backgroundColor: "#2B2D42",padding:"1rem"}} >
          {/* <Link to="/"><img id="logo" src="69.png" alt="69logo"></img></Link> */}
          <Link to="/" className="navbarTabs">Home</Link>
          <Link to="/about" className="navbarTabs">About</Link>
          <Link to="/faq" className="navbarTabs">FAQ</Link>
          <Link to="/contact" className="navbarTabs">Contact</Link>  
      </div>
    </nav>
  );
};

export default Navbar;