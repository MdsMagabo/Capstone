import { Link } from "react-router-dom";

const WhatWeOffer = () => {
    const showSectionWWO = () => {
        const WWO = document.querySelector(".what-we-offer-sect");

        const trigger = window.innerHeight / 5 * 4;
        const showSect = WWO.getBoundingClientRect().top;

        trigger > showSect ? WWO.classList.add("showWWO") : WWO.classList.remove("showWWO");
    }

    window.addEventListener("scroll", showSectionWWO);

    return (
        <section className="what-we-offer-sect" id="whatWeOffer">
            <h1>What We Offer?</h1>
            <div className="wwo-card-container">
                <div className="wwo-section-card card-1">
                    <h2>Awesome Discounts!</h2>
                    <p className="wwo-sect-text">We offer various services for you to avail. From free tire tire installations and other technical services at a discounted price</p>
                </div>
                <div className="wwo-section-card card-2">
                    <h2>Free Delivery!</h2>
                    <p className="wwo-sect-text">From Luzon, Visayas, or Mindanao we offer free delivery services no matter where you are!</p>
                </div>
                <div className="wwo-section-card card-3">
                    <h2>Free On-site installations!</h2>
                    <p className="wwo-sect-text">Free on-site installations are available at our local stores near you!</p>
                </div>
            </div>
            <h2>So? What are you waiting for? <Link reloadDocument to="/tires" className="offer-btn">Shop Now!</   Link></h2>
        </section>
    )
}

export default WhatWeOffer;