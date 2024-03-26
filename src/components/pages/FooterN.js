import React from 'react';
import '../../App.css'; // Import your CSS file
import './Home.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../public/logo.png'
import ijk from '../public/unsplash.jpeg'
import i1 from '../public/large.jpg'
import i11 from '../public/team-2.jpg'
import i2 from '../public/cargo.png'

import e from '../public/es.jpeg'
import o from '../public/op.jpeg'
import p1 from '../public/houses1.jpg'
import p2 from '../public/houses2.jpg'
import p3 from '../public/houses3.jpg'
import p4 from '../public/houses4.jpg'
import p5 from '../public/houses5.jpg'

import p from '../public/houses.jpg'
import { Link } from 'react-router-dom';


import { faArrowAltCircleUp, faPhone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';





class FooterN extends React.Component {

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };



  render() {
    return (
        <>
     

     <section class="about-section22">
<div className="navbar-container1">
   
     <footer className="footer">
      <div className="container3409">
       
      <div className="column3409">
        
      <Link to="/" className="navbar-brand1">
     <img src={logo}  width="100" height="100" className="logo" alt="Logo" /> 
     <span class="brand-text1">     ASHRA<br/> General Trading</span>
      </Link>


      
          </div>

        <div className="column3409">
        <h2>Services</h2>
            <ul class="abcdefg">
            <li>Transportation & commodity shipment</li>
              <li>Logistic service</li>
              <li>Supply chain</li>
              <li>Warehousing management</li>
              <li>Custom clearance</li>
           
            </ul>
          </div>

          <br/>
          <div className="column3409">
         
            <ul >
              <li>Supply and procurement of goods (food & nonfood items, stationary, furniture, shelter raw material)</li>
              <li>Real estate</li>
              <li>Trading services</li>
            </ul>



          </div>
        
          </div>   
      
      </footer>
      </div>

      </section>
     
 
     
      <footer className="footer1">
      <div className="container3409">
       
       <div className="column3409">
       <h2>UAE</h2>
           <ul class="abcdefg">
             <li class="aav"><a href="#"> <FontAwesomeIcon icon={faArrowAltCircleUp} />&nbsp;&nbsp;Port Saeed, First Floor, Office # 21, Dubai National Insurance Tower, Dubai UAE</a></li>
             <li><a href="#"><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+971 4 546 8456</a></li>
             <li><a href="#"><FontAwesomeIcon icon={faMobileAlt} />&nbsp;&nbsp;+971 56 333 3960</a></li>
           </ul>
         </div>

         <br/>
         <div className="column3409">
           <h2>EGYPT</h2>
           
           <ul class="abcdefg">
             <li class="aav"><a href="#"> <FontAwesomeIcon icon={faArrowAltCircleUp} />&nbsp;&nbsp; Cairo Madinati 4 8 102 Egypt </a></li>
             <li><a href="#"><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+971 4 546 8456</a></li>
             <li><a href="#"><FontAwesomeIcon icon={faMobileAlt} />&nbsp;&nbsp;+971 56 333 3960</a></li>
           </ul>



         </div>
         <div className="column3409">
           <h2>Sudan</h2>
           <ul class="abcdefg">
             <li class="aav"><a href="#"> <FontAwesomeIcon icon={faArrowAltCircleUp} />&nbsp;&nbsp;Street 49 Building 23 Khartoum Amarat Sudan
</a></li>
             <li><a href="#"><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+971 4 546 8456</a></li>
             <li><a href="#"><FontAwesomeIcon icon={faMobileAlt} />&nbsp;&nbsp;+971 56 333 3960</a></li>
           </ul>
         </div>
         </div>
       
      </footer>
  




      <div class="background-yellow3">
  
      © Copyright ASHRA GTC. All Rights Reserved

      </div>



    </>
      
    );
  }
}

export default FooterN;
