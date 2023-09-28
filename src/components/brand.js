import React, { Component } from 'react'; // Import React and Component
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import sliderLogo1 from '../assests/images/logo1.png';
import sliderLogo2 from '../assests/images/logo2.png';
import sliderLogo3 from '../assests/images/logo3.png';
import sliderLogo4 from '../assests/images/logo4.png';
import sliderLogo5 from '../assests/images/logo5.png';
import sliderLogo6 from '../assests/images/logo6.png';
import sliderLogo7 from '../assests/images/logo7.png';
import sliderLogo8 from '../assests/images/logo8.png';
import sliderLogo9 from '../assests/images/logo9.png';

class Brand extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    };

    return (
      <div className='bg-logo'>
          <div className="logo-carousel">
        <Slider {...settings}>
          <div className='logo-size'>
            <img className="logo-img" src={sliderLogo1} alt="" />
          </div>
          <div>
            <img className="logo-img" src={sliderLogo2} alt="" />
          </div>
          <div>
            <img className="logo-img" src={sliderLogo3} alt="" />
          </div>
          <div>
            <img className="logo-img" src={sliderLogo4} alt="" />
          </div>
          <div>
            <img className="logo-img" src={sliderLogo5} alt="" />
          </div>
          <div>
            <img className="logo-img" src={sliderLogo6} alt="" />
          </div>
          <div>
            <img className="logo-img" src={sliderLogo7} alt="" />
          </div>
          <div>
            <img className="logo-img" src={sliderLogo8} alt="" />
          </div>
          <div>
            <img className="logo-img" src={sliderLogo9} alt="" />
          </div>
        </Slider>
      </div>
      </div>

    );
  }
}

export default Brand;
