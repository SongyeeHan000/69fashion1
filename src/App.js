import logo from './logo.svg';
import './App.css';
import React, {Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from "./Navigation/Navbar.js";

import Home from './Home'
import About from './About'
import Contact from './Contact'
import FAQ from './FAQ';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/faq" element={<FAQ/>} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
