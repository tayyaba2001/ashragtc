import React from 'react';
import '../../App.css'; // Import your CSS file
import './Contact.css';
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







class Contact extends React.Component {

    scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
      });
    };
  
  
  
    render() {
      return (
          <>

<div class="whatsapp">
  <a href="https://wa.me/923155647179?receivetext=hy" target="_blank">
  <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
&nbsp; How can I help you?
</a>
</div>

        
  <section class="about-section3">
  <div class="color-divcontact">
    <h2 class="headingcontact">Our Field of Operations</h2>
   
  </div><br/>
    <div class="container1">
  
  
    <form id="contactForm">
    <div class="form-row">
      <div class="form-column ">
        <div class="form-group center1">
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required  onChange={this.handleInputChange}/>
        
          <div class="error-message">Enter correct info</div> 
        </div>
      </div>
      <div class="form-column ">
        <div class="form-group center1">
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required/>
          <div class="error-message">Enter correct info</div> 
        </div>
      </div>
  
  
  
    </div>
    <div class="form-row1">
      <div class="form-column1 ">
    <div class="form-group center">
      <input type="email" id="email" name="email" placeholder="Enter your email address" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"/>
    </div></div></div>
  
    <div class="form-row1">
      <div class="form-column1 ">
    <div class="form-group center">
      <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
    </div></div></div>
  
    <div class="form-row1">
      <div class="form-column1 ">
    <div class="form-group center">
      <textarea id="message" rows="5" name="message" placeholder="Enter your message" required></textarea>
    </div></div></div>
    <div class="form-row1">
      <div class="form-column1 ">
    <div class="form-group center">
      <button type="submit">Submit</button>
    </div></div></div>
  </form>
 
  </div></section>

  <div class="map-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d59122026.39811348!2d55.3286163!3d25.2530159!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f5cd88efab80f%3A0x4e795f0e11a9bd5a!2sDubai%20National%20Insurance%20Building%2028%2034th%20St%20Port%20Saeed%20-%20Dubai%20United%20Arab%20Emirates!3m2!1d25.253015899999998!2d55.3286163!5e0!3m2!1sen!2s!4v1711044113861!5m2!1sen!2s" width="1200" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

      </>
        
      );
    }
  }
  
  export default Contact;