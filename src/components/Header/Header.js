import React, {useState} from 'react'
import './Header.css';
import {animateScroll as scroll} from "react-scroll";

function Header() {

  // Change nav color
  const [color,setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 140){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
      <header className={color ? "header header-bg" : "header"}>
          <div className="logo" onClick={() => scroll.scrollToTop()}>
            <img className='header__logo' src="logo.png" alt='no' />
            <h2 className='header__title'>Camfinde</h2>
          </div>
      </header>
  )
}

export default Header