import React, { Component } from 'react'
import ijk from '../public/opp.avif';
import i1 from '../public/about1.jpeg';
import i2 from '../public/cargo.png';
import our from '../public/OurCustomers.png';
import giv11 from '../public/giv1.jpeg';
import giv19 from '../public/giv9.jpeg';
import giv110 from '../public/giv10.jpg';
import giv12 from '../public/giv2.jpeg';
import giv13 from '../public/giv3.jpeg';
import giv14 from '../public/giv4.jpeg';
import giv15 from '../public/giv5.jpg';
import giv16 from '../public/giv6.jpeg';
import giv17 from '../public/giv7.jpeg';
import giv18 from '../public/giv8.jpg';
import { faArrowAltCircleUp, faPhone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import './cargo.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import e from '../public/of1.jpeg'
import o from '../public/of2.jpg'
import '../../App.css'; 
import i11 from '../public/giv1.jpeg';

export default class Cargo extends Component {
  handleImageClick = (event) => {
    const img = event.target;

    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.mozRequestFullScreen) { /* Firefox */
      img.mozRequestFullScreen();
    } else if (img.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { /* IE/Edge */
      img.msRequestFullscreen();
    }
  };

    scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling behavior
        });
      };

    render(){

        return (
<>


<div class="whatsapp">
  <a href="https://wa.me/923155647179?receivetext=hy" target="_blank">
  <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
&nbsp; How can I help you?
</a>
</div>

<div class="background-gray3">
  <div class="imageingboxcargo">
   
    <img src={i2} alt="Image Description" style={{ maxWidth: '300px', maxHeight: '200px' }} />
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
  </div>  </div>




  <div class="color-divcargo">
  <h2 class="headingcargo">Services</h2>
</div>

<section class="about-section2">
  <div class="container1">
   
    <div class="content-container1">
    <div class="image-container123">
        <img src={e}  alt="Description" />
        <img src={o}  alt="Description" />
      </div>

      <div class="text-container1"> 
      <strong>Fly Cargo and Logistic Services extend to reach different and miscellaneous sectors, which include:</strong>
      <ul>
    <li>Products and commodities shipping and transporting all over the country.</li>
    <li>Export and deliver valuables wherever delegated.</li>
    <li>Import products and items to country from all over world.</li>
    <li>Highly care of sensitive items shipments.</li>
    <li>Medicine loads careful cargo.</li>
    <li>Logistic solutions.</li>
    <li>Flights booking services.</li>
    <li>Supply and procurement of goods (food, Nonfood items, Stationary, furniture, Shelters row material… Etc.) for NGOs & Government corporations.</li>
    <li>Dangerous Goods shipping.</li>
    <li>Customs clearance.</li>
    <li>In/out boarder Air,Land & Sea shipping and transporting.</li>
    <li>Supply Fuel Transport.</li>
    <li>Dangerous goods shipping.</li>
    <li>Custom clearance services.</li>
    <li>Warehouse management.</li>
    <li>Goods packing and categorizing.</li>
  </ul>






    </div>
  </div></div>
</section>



<section class="about-section1pqrc">
  <div class="container1pqrc">

  <div class="content-container1pqrc">

            
      <div class="containergeneralc">
<div class="image-containergeneralc">

<img src={giv12} alt=""onClick={this.handleImageClick} />
    <img src={giv11} alt="" onClick={this.handleImageClick} />
    <img src={giv13} alt=""onClick={this.handleImageClick} />
    <img src={giv14} alt="" onClick={this.handleImageClick}/>
    <img src={giv15} alt="" onClick={this.handleImageClick}/>
    <img src={giv16} alt="" onClick={this.handleImageClick}/>
    <img src={giv17} alt="" onClick={this.handleImageClick}/>
    <img src={giv18} alt="" onClick={this.handleImageClick}/>
   
</div>
</div>
 </div>
      </div>
</section>









<div class="background-grayabout">
  <div class="image-containerabout">
  <div class="headdd">Our Customers</div>
    <img src={our} alt="Image Description" />
  </div>
  </div>




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




     
    )
  }
}

