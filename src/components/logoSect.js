import Brand from "./brand";

const LogoSect = () => {
    const displayLogoSect = () => {
        const logoSect = document.querySelector(".bg-logo");

        const triggerLogoSect = window.innerHeight / 5 * 4;
        const showLogoSect = logoSect.getBoundingClientRect().top;

        triggerLogoSect > showLogoSect ? logoSect.classList.add("displayLogo") :
        logoSect.classList.remove("displayLogo")
    }

    // eventListener
    window.addEventListener("scroll", displayLogoSect);
    
    return (
        <Brand/>
    )
}

export default LogoSect;