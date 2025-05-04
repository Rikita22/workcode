import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Rikita</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.linkedin.com/in/rikitak9bbb66254/" className="footer__social-icon" target="_blank">
            <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@smining6716" className="footer__social-icon" target="_blank">
        <i class="uil uil-youtube"></i>
        </a>
            </div>
            <span className='footer__copy'>&#169; RK. All rights reserverd</span>
        </div>
    </footer>
  )
}

export default Footer
