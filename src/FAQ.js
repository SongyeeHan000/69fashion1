import React from 'react'
import { Nav } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import { HashLink } from 'react-router-hash-link';
import Navbar from './Navigation/Navbar';

// use scrollspy to get one question to the dropdown questionbox
export default function FAQ() {

  return (

    <div>
    <Navbar/>

    <Accordion>
      <h1 className='contentTitle'>FAQ</h1>
      {/* <ul>
        <li><HashLink smooth to="#returnAndExchange">Return/Exchange Policies</HashLink></li>
        <li><HashLink smooth to="#dressAndSizes">Dresses & Sizes</HashLink></li>
        <li><HashLink smooth to="#storeInfo">Store Information</HashLink></li>
      </ul>
       */}
       <div style={{margin:'3rem', border: 'solid black 1px', padding:'2rem'}}>
       <h1 id='returnAndExchange' className='accordionTitle' style={{marginTop:'0px'}}>Return/Exchange/Layaway Policies</h1>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do you ship dresses?</Accordion.Header>
        <Accordion.Body>
          No, we do not. We only allow in-person purchases, so come to our store soon!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I return or exchange the dress after it has been purchased, even if it has never been worn?</Accordion.Header>
        <Accordion.Body>
          Our policy states that every purchase is <span style={{fontWeight:'bold',textDecoration:'underline'}}>FINAL SALE</span>. We <span style={{fontWeight:'bold',textDecoration:'underline'}}>DO NOT ALLOW</span> returns or exchanges, so please try on our dresses and examine the dress carefully before purchasing our dresses. 
          We do not allow returns or exchange due to delicate embellishments on our dresses. 
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I do a layaway payment?</Accordion.Header>
        <Accordion.Body>
          No, we do not do layaway payments anymore.
        </Accordion.Body>
      </Accordion.Item>
      
      <h1 id='dressAndSizes' className='accordionTitle'>Dresses/Tuxedos & Sizes</h1>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What kind of dresses do you sell?</Accordion.Header>
        <Accordion.Body>
          We sell dresses for special occasions for Quinceanera, Prom, Sweet 16, Weddings, and Cocktails. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can I rent a dress?</Accordion.Header>
        <Accordion.Body>
          We do not rent dresses to customers. Customers can only buy dresses from our store.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Do you sell/rent tuxedo?</Accordion.Header>
        <Accordion.Body>
          Sorry for the inconvenience, but we do not sell or rent tuxedo. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>What is your size range?</Accordion.Header>
        <Accordion.Body>
          We have sizes from XS to 3XL. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Do you have Alterations & Tailoring Services?</Accordion.Header>
        <Accordion.Body>
          No, we do not alter dresses. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>If 6&9 does not have my size, can I make a "special" order?</Accordion.Header>
        <Accordion.Body>
          No,we cannot make "special" orders. We only sell dresses that are available at the store.
        </Accordion.Body>
      </Accordion.Item>
  

      <h1 id='storeInfo' className='accordionTitle'>Store Information</h1>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Where is the store located?</Accordion.Header>
        <Accordion.Body>
          Our store is located in Bronx, NY. Customers from Manhattan can take the uptown 4 or D train to "Fordham Road" to reach our store! 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header>Are you by appointment only?</Accordion.Header>
        <Accordion.Body>
         No, we are not. Feel free to come in anytime between 12pm - 6:30pm everyday!
        </Accordion.Body>
      </Accordion.Item>

       </div>

    </Accordion>
    <p style={{textAlign:'center', paddingBottom:'5rem'}}>If you have any other question, please call us at 718-220-6969.</p>
    </div>


  
    
  )
}
