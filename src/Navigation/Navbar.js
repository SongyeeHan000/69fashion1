import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-light navbar-expand-md">
       {/* <img src="69(1).png" alt="69logo"></img><a href="/" className="navbar-brand"></a> */}
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbar" style={{display:"flex", justifyContent:"space-evenly"}} >
        <Link to="/"><img id="logo" src="69.png" alt="69logo"></img></Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>  
    </div>
    </nav>
  );
};

export default Navbar;