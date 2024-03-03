
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
                    </button>

                    <button className="dark-mode-btn"><a href="#!">Sing up</a></button>

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