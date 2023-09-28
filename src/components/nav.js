import ScrollspyNav from "react-scrollspy-nav";
import { Link } from "react-router-dom";

const Navbar = () => {

    // navBar animation on scroll
    const navOnScroll = () => {
        const scrollTrigger = window.scrollY;
        const nav = document.querySelector(".nav");

        scrollTrigger > 0 ? nav.classList.add("navOnScroll") : nav.classList.remove("navOnScroll")
    }

    // eventListener on window to trigger navOnScroll function
    window.addEventListener("scroll", navOnScroll);

    return(
        <>
            <nav  className="nav">   
                <div className="brand">
                    <div className="logo"/>
                </div>   
                <ul className="navbar">
                    <Link reloadDocument to="/" className="nav-item">Home</Link>
                    <ScrollspyNav
                    scrollTargetIds={["whatWeOffer", "testimonialsSect", "aboutUs"]}
                    offset={-50}
                    activeNavClass="is-active"
                    scrollDuration={900}
                    headerBackground="true">
                        <ul className="navbar">
                            <li><a href="#whatWeOffer" className="nav-item">Offers</a></li>
                            <li><a href="#testimonialsSect" className="nav-item">Testimonials</a></li>
                            <li><a href="#aboutUs" className="nav-item">About</a></li>
                        </ul>
                    </ScrollspyNav>
                    <Link reloadDocument to="/installationSite" className="nav-item">Installation Site</Link>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;