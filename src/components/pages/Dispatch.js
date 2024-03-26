import React from 'react';
import '../../App.css'; // Import your CSS file
import './Home.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../public/logo.png'
import ijk from '../public/unsplash.jpeg'
import i1 from '../public/large.jpg'
import i11 from '../public/team-2.jpg'
import i2 from '../public/cargo.png'
import dis from '../public/dispatch.png'
import './dis.css'
import { faArrowAltCircleUp, faPhone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import e from '../public/es.jpeg'
import o from '../public/op.jpeg'
import p1 from '../public/houses1.jpg'
import p2 from '../public/houses2.jpg'
import p3 from '../public/houses3.jpg'
import p4 from '../public/houses4.jpg'
import p5 from '../public/houses5.jpg'

import p from '../public/houses.jpg'








class Dispatch extends React.Component {

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };



  render() {
    return (
        <>
     






<div class="background-gray3">
  <div class="image-containerdis">
   
    <img src={dis} alt="Image Description" />
  </div>
  <div class="text-block12">
    <p>
    Fly Cargo and Logistics was founded in 2010, registered as a shipping, transporting and 
    logistic services provider company in Sudan<br/>
As start, company started it is operations of transporting ,commodities, personal lavages,
 loads and valuables for private sector telecommunication companies, organizations and government 
 agencies by land, air and sea both inboard and outboard country With time, Fly Cargo and logistic gained trust,
  reliability and satisfaction as a lead recognized company in logistic services and formulated internal and 
  external partnerships and joint ventures with other firms in field to optimize  service quality, which affected 
  positively on business growth Now days, Fly Cargo extended it is services to include procurement and supply services of products, goods and services for it is clients
  </p>
  </div>
</div>










<div class="whatsapp">
  <a href="https://wa.me/923155647179?receivetext=hy" target="_blank">
  <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
&nbsp; How can I help you?
</a>
</div>


















<section class="about-section3">

  <div class="container1">
  <ul class="classname"> 
  <div class="color-div3456">
  <h2 class="heading3456">Our Field of Operations</h2>
 
</div>
<br/>
    <div class="content-container1">
    <div class="image-container1">
        <img src={p} />
      </div>
      <div class="text-container1"> <p>
      <h3>       <li>    <strong>Real Estate Excellence</strong>  </li></h3> 
      Facilitate seamless real estate transactions by providing expert guidance in buying, selling, leasing, and property management. 

Create spaces that enhance the quality of life for individuals and contribute to the growth of communities<br/>
       </p>  </div>       </div>

       
    <div class="content-container1">
    <div class="image-container1">
        <img src={p1}   />
      </div>
      <div class="text-container1"> <p>
      <h3>       <li>    <strong>Import and Export</strong>  </li></h3> 
      DISBATCH is one of the most distinguished import and export companies, worthy of the trust of its customers, because it has an integrated team concerned with ensuring the safety of the product supposed to be imported or exported, which ensures that its customers money is preserved and their chances of achieving the highest possible profit.   </p>  </div>       </div>

       <div class="content-container1">
    <div class="image-container1">
        <img src={p2} alt=""  />
      </div>
      <div class="text-container1"> <p>
      <h3>       <li>    <strong>Custom clearance</strong>  </li></h3> 
      The company undertakes the task of implementing all customs procedures for the customer as soon as the goods arrive, as it terminates all dealings with government agencies concerned with customs clearance on behalf of the customer, whatever the means of transporting incoming or outgoing goods (sea, air, land) <br/>
       </p>  </div>       </div>

       <div class="content-container1">
    <div class="image-container1">
        <img src={p3}   />
      </div>
      <div class="text-container1"alt="" > <p>
      <h3>       <li>    <strong> Supply Chain</strong>  </li></h3> 
      The company is keen to select its suppliers very carefully, to ensure that the best service is provided to its customers and to achieve its primary goal of becoming one of the largest shipping, logistics and customs clearance companies at the local, regional and international levels. <br/>
       </p>  </div>       </div>


       <div class="content-container1">
    <div class="image-container1">
        <img src={p4}   alt=""/>
      </div>
      <div class="text-container1"> <p>
      <h3>       <li>    <strong>Logistic Services</strong>  </li></h3> 
      DISBATCH offers logistic services among other services offered to its clients, as it seeks to provide professional logistical support for import and export operations of large business and commercial activities, and transportation of goods and resources of all kinds from their home country to the consumption area.<br/>
       </p>  </div>       </div>


       <div class="content-container1">
    <div class="image-container1" alt="" >
        <img src={p5}  />
      </div>
      <div class="text-container1"> <p>
      <h3>       <li>    <strong>Transportation and commodity shipment</strong>  </li></h3> 
      The company relies on the most advanced systems in the transportation and shipping services provided to customers, as it applies international quality standards, which has enhanced their confidence in them, especially taking into account the nature of the goods supposed to be shipped and choosing the best way to pack and transport them, to ensure their arrival as they are without causing any damage. <br/>
       </p>  </div>       </div>















</ul>
  </div>
</section>









<section class="about-section2">
  <div class="container1">
    <h2>About Us</h2>
    <div class="content-container105">
    
      <div class="textblock123">
    
    <p> 
   
       Contact us today to learn more about how our services can support your business and help you achieve your goals
       </p>
    </div>
       <div class="textblock123">
  <Link to="/">
        <button class="asgfd"onClick={this.scrollToTop}>
          Connect us
        </button>
      </Link>
      

  

      </div>
      




      </div>
  </div>
</section>







    </>
      
    );
  }
}

export default Dispatch;
