import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <div id="aboutSection" >
            {/* <div style={{display:"flex"}}>
                <img src="6and9FashionStore.png" alt="storeFront"/>
            </div> */}

            <div>
                <h1 className='title'>About</h1>
                <p id='description'> 
                    Find your special dress today at 6&9 Fashion Inc!
                    <br></br>
                    We have been in business for more than 15 years. We have dresses for all occasions; Weddings. Quinceanera, Sweet 16, Prom, Pageant, Cocktail, Evening dresses.
                    {/* list some companies we sell */}
                    {/* link to FAQ and Contact */}
                    <br></br>
                    <br></br>
                    If any other questions occur, please look at our <Link to="/faq">FAQ page</Link>
                </p>
            </div>
        </div>

        <h3 id='socialMedia'> Follow us here: </h3>
            <div className="logos">
                {/* no facebook link? */}
                <span><a href="https://www.facebook.com/6&9fashion"><img className="socialMediaLogos" src="facebookLogo.png" alt="facebookLogo"/></a></span>
                <span><a href="https://www.instagram.com/6_9fashion/"><img className="socialMediaLogos" src="instagramLogo.png" alt="instagramLogo"/></a></span>
            </div>  
    </div>
    
    
   
  )
}
