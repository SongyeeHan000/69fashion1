import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav >
      <div style={{display:"flex", width:"100%", justifyContent:"center",backgroundColor: "#2B2D42" }}>
        <h1 className="font-link" style={{textAlign:"center", padding: "1rem", marginBottom:"0px", backgroundColor: "#2B2D42", color: "#EDF2F4", fontWeight:"600"}}>6&9 Fashion</h1>
      </div>
       {/* <img src="69(1).png" alt="69logo"></img><a href="/" className="navbar-brand"></a> */}
      {/* <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
      </button> */}
    
      <div className="navbar-collapse collapse" id="navbar" style={{display:"flex", justifyContent:"space-evenly", backgroundColor: "#2B2D42",padding:"1rem"}} >
          {/* <Link to="/"><img id="logo" src="69.png" alt="69logo"></img></Link> */}
          <Link to="/" className="font-link" style={{color: "#EDF2F4", textDecoration:"none", fontSize:"20px"}}>Home</Link>
          <Link to="/about" className="font-link" style={{color: "#EDF2F4", textDecoration:"none", fontSize:"20px"}}>About</Link>
          <Link to="/faq" className="font-link" style={{color: "#EDF2F4",textDecoration:"none", fontSize:"20px"}}>FAQ</Link>
          <Link to="/contact" className="font-link" style={{color: "#EDF2F4",textDecoration:"none", fontSize:"20px"}}>Contact</Link>  
      </div>
    </nav>
  );
};

export default Navbar;