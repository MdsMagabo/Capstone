import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {

    const displayTestimonials = () => {
        const testimonialSect = document.querySelector(".testimonials-sect");
        const triggerTestimonials = window.innerHeight / 5 * 4;
        const showTestimonials = testimonialSect.getBoundingClientRect().top;

        triggerTestimonials > showTestimonials ? testimonialSect.classList.add("displayTestimonials") : testimonialSect.classList.remove("displayTestimonials");
    }

    const displayCard1 = () => {
        // cards
        const tc1 = document.querySelector(".tc-1");
        const tc2 = document.querySelector(".tc-2");
        const tc3 = document.querySelector(".tc-3");
        const tc4 = document.querySelector(".tc-4");
        const tc5 = document.querySelector(".tc-5");

        // btns
        const tesNav1 = document.querySelector(".tesNav-1");
        const tesNav2 = document.querySelector(".tesNav-2");
        const tesNav3 = document.querySelector(".tesNav-3");
        const tesNav4 = document.querySelector(".tesNav-4");
        const tesNav5 = document.querySelector(".tesNav-5");

        // cards efx
        tc1.classList.add("displayCard");
        tc1.classList.remove("hideCard");
        
        tc2.classList.remove("displayCard");
        tc3.classList.remove("displayCard");
        tc4.classList.remove("displayCard");
        tc5.classList.remove("displayCard");

        // btn efx
        tesNav1.classList.add("activeTstmnlBtn");
        tesNav1.classList.remove("hidden");
        tesNav2.classList.remove("activeTstmnlBtn");
        tesNav3.classList.remove("activeTstmnlBtn");
        tesNav4.classList.remove("activeTstmnlBtn");
        tesNav5.classList.remove("activeTstmnlBtn");
    }

    const displayCard2 = () => {
        // cards
        const tc1 = document.querySelector(".tc-1");
        const tc2 = document.querySelector(".tc-2");
        const tc3 = document.querySelector(".tc-3");
        const tc4 = document.querySelector(".tc-4");
        const tc5 = document.querySelector(".tc-5");

        // btns
        const tesNav1 = document.querySelector(".tesNav-1");
        const tesNav2 = document.querySelector(".tesNav-2");
        const tesNav3 = document.querySelector(".tesNav-3");
        const tesNav4 = document.querySelector(".tesNav-4");
        const tesNav5 = document.querySelector(".tesNav-5");

        // cards efx
        tc1.classList.remove("displayCard");
        tc1.classList.add("hideCard");
        tc2.classList.add("displayCard");
        tc3.classList.remove("displayCard");
        tc4.classList.remove("displayCard");
        tc5.classList.remove("displayCard");

        // btn efx
        tesNav1.classList.remove("activeTstmnlBtn");
        tesNav1.classList.add("hidden");

        tesNav2.classList.add("activeTstmnlBtn");
        tesNav3.classList.remove("activeTstmnlBtn");
        tesNav4.classList.remove("activeTstmnlBtn");
        tesNav5.classList.remove("activeTstmnlBtn");
    }
    const displayCard3 = () => {
        // cards
        const tc1 = document.querySelector(".tc-1");
        const tc2 = document.querySelector(".tc-2");
        const tc3 = document.querySelector(".tc-3");
        const tc4 = document.querySelector(".tc-4");
        const tc5 = document.querySelector(".tc-5");

        // btns
        const tesNav1 = document.querySelector(".tesNav-1");
        const tesNav2 = document.querySelector(".tesNav-2");
        const tesNav3 = document.querySelector(".tesNav-3");
        const tesNav4 = document.querySelector(".tesNav-4");
        const tesNav5 = document.querySelector(".tesNav-5");

        // cards efx
        tc1.classList.remove("displayCard");
        tc1.classList.add("hideCard");
        tc2.classList.remove("displayCard");
        tc3.classList.add("displayCard");
        tc4.classList.remove("displayCard");
        tc5.classList.remove("displayCard");

        // btn efx
        tesNav1.classList.remove("activeTstmnlBtn");
        tesNav1.classList.add("hidden");

        tesNav2.classList.remove("activeTstmnlBtn");
        tesNav3.classList.add("activeTstmnlBtn");
        tesNav4.classList.remove("activeTstmnlBtn");
        tesNav5.classList.remove("activeTstmnlBtn");
    }
    const displayCard4 = () => {
        // cards
        const tc1 = document.querySelector(".tc-1");
        const tc2 = document.querySelector(".tc-2");
        const tc3 = document.querySelector(".tc-3");
        const tc4 = document.querySelector(".tc-4");
        const tc5 = document.querySelector(".tc-5");

        // btns
        const tesNav1 = document.querySelector(".tesNav-1");
        const tesNav2 = document.querySelector(".tesNav-2");
        const tesNav3 = document.querySelector(".tesNav-3");
        const tesNav4 = document.querySelector(".tesNav-4");
        const tesNav5 = document.querySelector(".tesNav-5");

        // cards efx
        tc1.classList.remove("displayCard");
        tc1.classList.add("hideCard");
        tc2.classList.remove("displayCard");
        tc3.classList.remove("displayCard");
        tc4.classList.add("displayCard");
        tc5.classList.remove("displayCard");

        // btn efx
        tesNav1.classList.remove("activeTstmnlBtn");
        tesNav1.classList.add("hidden");

        tesNav2.classList.remove("activeTstmnlBtn");
        tesNav3.classList.remove("activeTstmnlBtn");
        tesNav4.classList.add("activeTstmnlBtn");
        tesNav5.classList.remove("activeTstmnlBtn");
    }
    const displayCard5 = () => {
        // cards
        const tc1 = document.querySelector(".tc-1");
        const tc2 = document.querySelector(".tc-2");
        const tc3 = document.querySelector(".tc-3");
        const tc4 = document.querySelector(".tc-4");
        const tc5 = document.querySelector(".tc-5");

        // btns
        const tesNav1 = document.querySelector(".tesNav-1");
        const tesNav2 = document.querySelector(".tesNav-2");
        const tesNav3 = document.querySelector(".tesNav-3");
        const tesNav4 = document.querySelector(".tesNav-4");
        const tesNav5 = document.querySelector(".tesNav-5");

        // cards efx
        tc1.classList.remove("displayCard");
        tc1.classList.add("hideCard");
        tc2.classList.remove("displayCard");
        tc3.classList.remove("displayCard");
        tc4.classList.remove("displayCard");
        tc5.classList.add("displayCard");

        // btn efx
        tesNav1.classList.remove("activeTstmnlBtn");
        tesNav1.classList.add("hidden");

        tesNav2.classList.remove("activeTstmnlBtn");
        tesNav3.classList.remove("activeTstmnlBtn");
        tesNav4.classList.remove("activeTstmnlBtn");
        tesNav5.classList.add("activeTstmnlBtn");
    }

    // event listener

    window.addEventListener("scroll", displayTestimonials);


    return (
       <section className="testimonials-sect" id="testimonialsSect">
           <div className="testimonials-container">
                <h2>What our clients say about us,</h2>
                <div className="testimonial-card tc-1">
                    <div className="testimonial-img tstmnl-img1"/>
                    <span className="testimonial-person-name">Alfred Santos</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">Maganda talga ang serbisyo ng GumuGulong. Bukod sa dekalidad na gulong na benebenta nila, Meron pang free installation. Sulit talaga yung pera mo.</p>
                </div>
                <div className="testimonial-card tc-2">
                    <div className="testimonial-img tstmnl-img2"/>
                    <span className="testimonial-person-name">Alexa Labrador</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">
                        Ang nagustuhan ko sa GumuGulong ay yung mga promo nila. Sa murang halaga, may serbisyong de kalidad ka na. 
                    </p>
                </div>
                <div className="testimonial-card tc-3">
                    <div className="testimonial-img tstmnl-img3"/>
                    <span className="testimonial-person-name">Mark San Juan</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">Malaki talaga ang mararating ng pera mo sa GumuGulong, bukod sa promos at freebees meron silang sobrang abot kaya pa ng gulong nila. Kaya sulit ka partner ang GumuGulong sa kin bilang isang motorista.</p>
                </div>
                <div className="testimonial-card tc-4">
                    <div className="testimonial-img tstmnl-img4"/>
                    <span className="testimonial-person-name">Dr. Elmer Santillan</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">As a Physician, having the best tires for my car is a must since I need to attend to my patients quickly. GumuGulong is a game Changer, I get to save a lot with their affordable services.</p>
                </div>
                <div className="testimonial-card tc-5">
                    <div className="testimonial-img tstmnl-img5"/>
                    <span className="testimonial-person-name">Xander Delos Reyes</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">Nung una, I need to pay a lot to gain the necessary services pagdating sa pagpapalit nung gulong ko. Buti nalang na refer sakin to ng kaibigan ko. Now, I pay less than I need to pay before.</p>
                </div>
                
                <div className="testimonial-navs">
                <span className="tstmnl-nav tesNav-1" onClick={displayCard1}/>
                <span className="tstmnl-nav tesNav-2" onClick={displayCard2}/>
                <span className="tstmnl-nav tesNav-3" onClick={displayCard3}/>
                <span className="tstmnl-nav tesNav-4" onClick={displayCard4}/>
                <span className="tstmnl-nav tesNav-5" onClick={displayCard5}/>
           </div>
           </div> 
       </section>
    )
}

export default Testimonials;