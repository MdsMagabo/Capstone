import React from 'react';
import { Link } from 'react-router-dom';

function Alltires() {
  const showSect= () => {
    const sect = document.querySelector(".alltire-sect");
    const trigger = window.innerHeight / 5 * 4;
    const showSect = sect.getBoundingClientRect().top;

    trigger > showSect ? sect.classList.add("showAlltire") :
    sect.classList.remove("showAlltire")
  }

  window.addEventListener("scroll", showSect);

  return (
    <div className="alltire-sect">
      <h2 className='alltire-title'>Go Beyond Miles with Gumu GumuGulong</h2>
      <p className='alltire-subtext'>Get Yours Now!</p>
      <div className='alltires'/>
      <div className='alltire-dbtn'>
        <Link reloadDocument to="/tires" className='alltire-Btn'>Go to shop</Link>
      </div>
    </div>
  )
}

export default Alltires;
