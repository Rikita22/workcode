import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    window.addEventListener("scroll",function(){
        const header=document.querySelector(".header");
        if(this.scrollY>=80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const[Toggle,showMenu]=useState(false);
    const[activeNav,setActiveNav]=useState("#home");
  return (
    <header className='header'>
        <nav className='nav container'>
        <div class="badge-base LI-profile-badge" className='nav__logo' data-vanity="rikita-k-9bbb66243" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/rikita-k-9bbb66243?trk=profile-badge">Rikita K</a></div>
            {/* <a href='index.html' className='nav__logo'>Rikita</a> */}
    <div className={Toggle?"nav__menu show-menu":"nav__menu"}>
        <ul className='nav__list'>
            <li className="nav__item">
                <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav==="#home"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-estate nav__icon"></i>Home
                </a>
            </li>

            <li className="nav__item">
                <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==="#about"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-user nav__icon"></i>About
                </a>
            </li>

            <li className="nav__item">
                <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav==="#skills"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
            </li>

            <li className="nav__item">
                <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav==="#projects"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-briefcase-alt nav__icon"></i>Projects
                </a>
            </li>

            <li className="nav__item">
                <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==="#portfolio"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
            </li>

            <li className="nav__item">
                <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==="#contact"?"nav__link active-link":"nav__link"}>
                    <i class="uil uil-message nav__icon"></i>Contact
                </a>
            </li>
        </ul>
        <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
      
    </div>
    <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
    <i class="uil uil-apps"></i>
    </div>
    </nav>
    </header>
  )
}

export default Header
