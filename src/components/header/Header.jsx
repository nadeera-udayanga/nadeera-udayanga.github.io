import React, { useState } from "react";
import "./header.css"

const Header = () => {
    const[Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Nadeera Udayanga</a>
                
                <div className= {Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-medal nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" className="nav__link">
                                <i className="uil uil-bag nav__icon"></i>
                                Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="projects" className="nav__link">
                                <i className="uil uil-apps nav__icon"></i>
                                Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="projects" className="nav__link">
                                <i className="uil uil-briefcase nav__icon"></i>
                                Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="contacts" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                Contact Me
                            </a>
                        </li>
                        
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header