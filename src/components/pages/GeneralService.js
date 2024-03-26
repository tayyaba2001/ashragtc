import React, { Component } from 'react'
import ijk from '../public/giv5.jpg';
import i1 from '../public/about1.jpeg';
import i2 from '../public/about2.jpeg';
import our from '../public/OurCustomers.png';
import './general.css';

import '../../App.css'; 
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

export default class GeneralService extends Component {
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


  render() {

    return (
      <>

<div class="whatsapp">
  <a href="https://wa.me/923155647179?receivetext=hy" target="_blank">
  <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
&nbsp; How can I help you?
</a>
</div>


      <div class="imageingboxserv">
 
      <img src={ijk} alt="Description" />
  <p>Our Services  </p>
</div>



      <section class="about-section1pqr">
  <div class="container1pqr">

  <div class="content-container1pqr">

            
      <div class="containergeneral">
<div class="image-containergeneral">

<img src={giv12} alt=""onClick={this.handleImageClick} />
<img src={giv13} alt=""onClick={this.handleImageClick} />
<img src={giv14} alt=""onClick={this.handleImageClick} />
<img src={giv11} alt=""onClick={this.handleImageClick} />
<img src={giv16} alt=""onClick={this.handleImageClick} />
<img src={giv15} alt=""onClick={this.handleImageClick} />
<img src={giv17} alt=""onClick={this.handleImageClick} />
<img src={giv18} alt=""onClick={this.handleImageClick} />
<img src={giv19} alt=""onClick={this.handleImageClick} />
<img src={giv110} alt=""onClick={this.handleImageClick} />
    

</div>
</div>

   
      <div class="text-container1pqr">
        <p>
    <ul>

  <li> Transportation & commodity shipment.  </li>  
  <li> Logistic service.  </li>
  <li>Supply chain. Warehousing management. Custom clearance.  </li>
  <li> Supply and procurement of goods (food & nonfood items, stationary, furniture, shelter raw material).  </li>
  <li> Real estate. Trading services  </li>
    </ul>
        </p>
      </div>  </div>
      </div>
</section>



<div class="background-grayabout">
  <div class="image-containerabout">
  <div class="headdd">Our Customers</div>
    <img src={our} alt="Image Description" />
  </div>
  </div>



      </>
    )
  }
}

