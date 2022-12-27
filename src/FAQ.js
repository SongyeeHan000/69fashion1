import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { HashLink } from 'react-router-hash-link';

// use scrollspy to get one question to the dropdown questionbox
export default function FAQ() {

  return (
    <Accordion>
      <h1 className='contentTitle'>FAQ</h1>
      {/* <ul>
        <li><HashLink smooth to="#returnAndExchange">Return/Exchange Policies</HashLink></li>
        <li><HashLink smooth to="#dressAndSizes">Dresses & Sizes</HashLink></li>
        <li><HashLink smooth to="#storeInfo">Store Information</HashLink></li>
      </ul>
       */}
       <div style={{margin:'3rem', border: 'solid black 1px', padding:'2rem'}}>
       <h1 id='returnAndExchange' className='accordionTitle' style={{marginTop:'0px'}}>Return/Exchange Policies</h1>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do you ship dresses?</Accordion.Header>
        <Accordion.Body>
          No, we do not. We only allow in-person purchases, so come to our store soon!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I return or exchange the dress after it has been purchased, but never worn?</Accordion.Header>
        <Accordion.Body>
          Our policy states that every purchase is final sale. We do not allow returns or exchanges, so please try on our dresses and examine the dress carefully before purchasing our dress{'('}es{')'}. 
          We do not allow returns or exchange due to delicate embellishments on our dresses. 
          </Accordion.Body>
      </Accordion.Item>
      
      <h1 id='dressAndSizes' className='accordionTitle'>Dresses & Sizes</h1>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What kind of dresses do you sell?</Accordion.Header>
        <Accordion.Body>
          We sell dresses for special occasions for Quinceanera, Prom, Sweet 16, Weddings, and Cocktails. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Do you guys sell/rent tuxedo?</Accordion.Header>
        <Accordion.Body>
          Sorry, we do not. We only sell women's dresses
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What is your range in sizes?</Accordion.Header>
        <Accordion.Body>
          We have sizes from XS to 3XL. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Do you alter dresses?</Accordion.Header>
        <Accordion.Body>
          No, we do not. 
        </Accordion.Body>
      </Accordion.Item>
  

      <h1 id='storeInfo' className='accordionTitle'>Store Information</h1>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Where is the store located?</Accordion.Header>
        <Accordion.Body>
          Store is located in Bronx, NY.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Are you by appointment only?</Accordion.Header>
        <Accordion.Body>
         No, we are not. Feel free to come in anytime between 12pm - 6:30pm everyday!
        </Accordion.Body>
      </Accordion.Item>

       </div>

    </Accordion>
  
    
  )
}
