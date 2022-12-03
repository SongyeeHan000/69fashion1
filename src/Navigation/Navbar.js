import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
       <a href="/" className="navbar-brand">69Fashion</a>
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbar" style={{display:"flex", justifyContent:"space-evenly"}} >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>  
    </div>
    </nav>
  );
};

export default Navbar;