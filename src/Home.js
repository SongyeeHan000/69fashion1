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

      <div id="container" style={{position:'relative'}}>
          <img src='promdress.png' alt="backgroundpic" style={{position:'absolute', top:0, left: '50%', transform: 'translateX(-50%)' }}></img>
          <h1 style={{position:'absolute', top:0, left:'30%', transform: 'translateY(350%)' }}>Moto.</h1>
      </div>
     
    // </div>
  )
}
