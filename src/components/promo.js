import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../assests/images/image1.png";
import sliderImg2 from "../assests/images/image2.png";
import sliderImg3 from "../assests/images/image3.jpg";
import CountdownTimer from "./countDownTimer";
import { Link } from "react-router-dom";
// import sliderImg5 from "../assests/images/image5.jpg"

const Promo = () =>{

  const displayPromo = () => {
    let promoCont = document.querySelector(".promoCont");
    promoCont.classList.add("displayPromo")
  }
  const hidePromo = () => {
    let promoCont = document.querySelector(".promoCont");
    promoCont.classList.remove("displayPromo")
  }
    return (
      
      <>
          <div className="promo promoCont">
              <div>
                  <img className="promo-img" src={sliderImg1} alt=""/>
              </div>
              <div>
                  <img className="promo-img"  src={sliderImg2} alt=""/>
              </div>
              <div>
                    <img className="promo-img"  src={sliderImg3} alt=""/> 
              </div>
              {/* <div>
                    <img className="promo-img"  src={sliderImg5} alt=""/>
              </div> */}
          </div>    
      
        <span className="promo-access-trigger" onMouseOver={displayPromo}
        onMouseOut={hidePromo}>Promo runs until, <CountdownTimer countdownTimeStampMs={ 1696553364209 }/><Link reloadDocument to="/tires" className="promo-to-shop-portal">Buy Now!</Link> </span>
      </>
    )
}
export default Promo;