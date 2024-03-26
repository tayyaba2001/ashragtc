import React ,{ Component } from 'react';
import '../../App.css'; // Import your CSS file
import './Home.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../public/logo.png'
import ijk from '../public/unsplash.jpeg'
import i1 from '../public/large.jpg'
import i11 from '../public/team-2.jpg'
import i2 from '../public/cargo.png'
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
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';




import { faArrowAltCircleUp, faPhone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';





class NavbarNew extends React.Component {
 


  render() {



    return (
        <>
      <div className="outer-container">
        <div className="container">
          <div className="c345">
            <div className="text">
    
     
            <div class="fty">
            <FontAwesomeIcon icon={faEnvelope} /> Email: Info@ashragtc.com 
</div>

<div class="fty">
<FontAwesomeIcon icon={faPhone} />  Phone: 0971 4 546 8456 
</div>


<div class="fty">
<FontAwesomeIcon icon={faMobileAlt} />  971 56 333 3960
</div>
              
              </div>
          </div>
        </div>
      </div>




      <div className="navbar-container">
    
      <Link to="/" className="navbar-brand">
        <img src={logo}  width="70" height="70" className="logo" alt="Logo" /> 
        <span class="brand-text"> ASHRA General Trading</span>
        </Link>
        </div>
   





        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
     

        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
     
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
     
        <a class="nav-link" href="/contact">
          
     
          Contact
          
          
          </a>
      </li>
      <li class="nav-item dropdown">
      
        <a class="nav-link dropdown-toggle" href="/services" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     
     
       Services


        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/generalservice">Ashra General Service</a>
          <a class="dropdown-item" href="/cargoservice">Cargo Service</a>
          <a class="dropdown-item" href="/dispatch-trading-service">Dispatch Trading Service</a>
        </div>
      </li>
    </ul>
  </div>
</nav>



    </>
      
    );
  }
}

export default NavbarNew;
