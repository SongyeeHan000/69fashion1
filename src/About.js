import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navigation/Navbar'

export default function About() {
  return (
    <div>
        <Navbar />
        
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{display:'flex'}}>
                <img src='girl.png' alt="backgroundpic" style={{display:'flex', padding:'2rem'}}></img>
            </div>
            <div style={{padding:'5rem 2rem'}}>
                {/* <img src="6and9FashionStore.png" alt="storeFront" style={{height:"600px"}}/> */}
                <div>
                {/* <h1 className='contentTitle'>About</h1> */}
                <p id='description'> 
                    Find your special dress today at 6&9 Fashion Inc!
                    <br></br>
                    We have been in business since 2003. We have dresses for all occasions; Weddings. Quinceanera, Sweet 16, Prom, Pageant, Cocktail, Evening dresses.
                    {/* list some companies we sell */}
                    {/* link to FAQ and Contact */}
                    <br></br>
                    <br></br>
                    If any other questions occur, please look at our <Link to="/faq">FAQ page</Link>
                </p>
                <div style={{padding:'3rem'}}>
                    <h3 id='socialMedia'> Follow us here: </h3>
                    <div className="logos">
                        {/* no facebook link? */}
                        <span><a href="https://www.facebook.com/6&9fashion"><img className="socialMediaLogos" src="facebookLogo.png" alt="facebookLogo"/></a></span>
                        <span><a href="https://www.instagram.com/6_9fashion/"><img className="socialMediaLogos" src="instagramLogo.png" alt="instagramLogo"/></a></span>
                </div>  

                </div>
                
            </div>
            </div>

        



        </div>
        
        
    </div>
  )
}
