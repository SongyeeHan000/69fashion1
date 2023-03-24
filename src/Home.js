import React from 'react'

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

      <div id="homepage" style={{position:'relative'}}>
          <img src='69Logo.png' alt="backgroundpic" style={{display:'flex'}}></img>
          <h1 style={{position:'absolute', bottom: '5%', fontSize: 'medium', }}>Step into the spotlight with our dazzling selection of dresses!</h1>
      </div>
     
    // </div>
  )
}
