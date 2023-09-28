import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faContactBook } from '@fortawesome/free-solid-svg-icons';
import Footer from './footer';

const About = () => {
  
  const displayAboutSect = () => {
    const aboutSect = document.querySelector(".about-container");

    const aboutTrigger = window.innerHeight / 5 * 4;
    const showAbout = aboutSect.getBoundingClientRect().top;

    aboutTrigger > showAbout ? aboutSect.classList.add("displayAbout") : aboutSect.classList.remove("displayAbout");
  }

  const displaySlide1 = () => {

    const aboutSlide1 = document.querySelector(".about-sub1");
    const aboutSlide2 = document.querySelector(".about-sub2");
    const txtBtn1 = document.querySelector(".slideAboutBtn-1");
    const txtBtn2 = document.querySelector(".slideAboutBtn-2");

    aboutSlide1.classList.add("displaySlide");
    aboutSlide2.classList.remove("displaySlide");
    txtBtn1.classList.add("activeBtn");
    txtBtn2.classList.remove("activeBtn");
  }
  
  const displaySlide2 = () => {
  
    const aboutSlide1 = document.querySelector(".about-sub1");
    const aboutSlide2 = document.querySelector(".about-sub2");
    const txtBtn1 = document.querySelector(".slideAboutBtn-1");
    const txtBtn2 = document.querySelector(".slideAboutBtn-2");

    aboutSlide1.classList.remove("displaySlide");
    aboutSlide1.classList.add("hideSlide");
    aboutSlide2.classList.add("displaySlide");
    txtBtn1.classList.remove("activeBtn");
    txtBtn1.classList.add("inactiveBtn");
    txtBtn2.classList.add("activeBtn");

    console.log(aboutSlide1);
  }

  // event listener
  window.addEventListener("scroll", displayAboutSect);

  return (
    <div className='about-container' id="aboutUs">
        <div className='about-recontainer'>
            <div className='about-logo'>
            </div>
            <h3 className='about-text'>ABOUT US</h3>
            <p className='about-sub1'>GumuGulong is the premier online tire marketplace in the Philippines. It is operated by Tower T5 Incorporated and 100% Filipino owned. It was launched in May 2020 and carefully curated a community of legitimate tire sellers and installation centers in the Philippines. It currently carries 20+ quality tire brands and over 100 tire shops in the country and still growing.</p>
         
            <p className='about-sub2'>
            Our vision is to revolutionize how Filipinos buy tires by providing quality tires at competitive pricing backed by superior customer service from searching tires to installation. We have made it possible to shop for tires online from legitimate sellers, complete with the manufacturer's warranty and have it professionally fitted by an installation center convenient for our valued customers.</p>
            <div className='btn-cont'>
              <button className='slideAboutBtn-1 slideBtn' onClick={displaySlide1}></button>
              <button className='slideAboutBtn-2 slideBtn' onClick={displaySlide2}></button>
            </div>
            <div className='icon-footer'>
              <FontAwesomeIcon icon={faFacebook} className='icon-fa icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faGoogle} className='icon-google icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faYoutube} className='icon-yt icon'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faContactBook} className='icon-contact icon'></FontAwesomeIcon>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About;
