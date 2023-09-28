import videoBg from '../assests/videoBg.mp4';
import Alltires from "./alltires";
import WhatWeOffer from './whatWeOffer';
import Promo from "./promo";
import LogoSect from './logoSect';
import Testimonials from './testimonials.js';
import About from './about';

const Hero = () => {
    return  (
        <>
            <div className="header-section">
                <video className="bg-video" src={videoBg} autoPlay loop muted />
            </div>
            <WhatWeOffer/>
            <Alltires/>
            <Promo/>
            <LogoSect/>
            <Testimonials/>
            <About/>
        </>
    )
}

export default Hero;