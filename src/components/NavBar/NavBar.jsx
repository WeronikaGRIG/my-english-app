
import React from 'react'
import './NavBar.css'

export default function NavBar() {

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <a href="./index.html" className="logo"><strong>Learn<em> English</em></strong></a>

                    <button className="dark-mode-btn">
                        <a href="#!" className="btn">Sing in</a>

                        {/* <img src="./img/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon" /> */}
                        {/* <img src="./img/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon" /> */}
                    </button>

                    <button className="dark-mode-btn"><a href="#!" className="btn">Sing up</a></button>

                    <ul className="nav-list">
                        <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Home</a></li>
                        <li className="nav-list__item"><a href="./projects.html" className="nav-list__link">Vocab</a></li>
                        <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}