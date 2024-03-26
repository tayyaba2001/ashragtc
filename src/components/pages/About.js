import React, { Component } from 'react'
import ijk from '../public/opp.avif';
import i1 from '../public/about1.jpeg';
import i2 from '../public/about2.jpeg';
import our from '../public/OurCustomers.png';
import './About.css';
import '../../App.css'; 
import { faArrowAltCircleUp, faPhone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default class About extends Component {

  render() {
    return (
      <>
        

<div class="imageingbox18">
  <img src={ijk} alt="Description" />

  <p>About us</p>
</div>

<div class="whatsapp">
  <a href="https://wa.me/923155647179?receivetext=hy" target="_blank">
  <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
&nbsp; How can I help you?
</a>
</div>



<section class="about-section1p">
  <div class="container1p">

    <div class="content-container1p">
  
      <div class="image-container1p">
        <img src={i1}  alt="Description" />
        <img src={i2}  alt="Description" />
      </div>
    
      <div class="text-container1p">
        <p>
        Ashra Company, headquartered in the United Arab Emirates, as parent & operates as a dynamic conglomerate overseeing two distinct subsidiaries: Fly Cargo and Dispatch Company that they are Specializing in logistics, Fly caters, relief items & general supply to diverse needs of organizations, government, entities, and large companies. also Playing an important role for humanity needs through NGOs. Meanwhile as Dispatch Company has strategic location in Egypt, efficiently manages the seamless flow of supplies between Egypt and Sudan through Fly Cargo company & both of companies are enhancing services of Ashra Company .
So Ashra Company now growth & became as portfolio & expanded the services to cover middle east & Africa regions for supply ,transportation ,logistic ,real-estate & various commercial services & providing this services with a dedication to continues improvement and adherence to global service standards .
<br/>
</p>
<h3>VISION</h3> <p>
To be a pioneering force and trusted partner in the real estate, commercial transportation, and supply sectors, recognized for our unwavering commitment to excellence, innovation, and sustainable practices. We aim to redefine industry standards, creating lasting value for our clients, partners, and communities
 <br/></p>
<h3>MISSION</h3> <p>
To consistently exceed customer expectations through reliable, flexible, and cost-effective logistics services.

To foster a culture of innovation, continuous improvement, and sustainability in all aspects of our operations.

To build lasting relationships with our clients, partners, and employees based on trust, integrity, and mutual success.  <br/>
     
So Ashra Company now growth & became as portfolio & expanded the services to cover middle east & Africa regions for supply ,
transportation ,logistic ,real-estate & various commercial services & providing this services with a dedication to continues improvement and adherence to global service standards .
        </p>
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



      </>
    )
  }
}

