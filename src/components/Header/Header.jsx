import React from 'react'
import './Header.css';
import NavBar from '../NavBar/NavBar';

export default function Header() {
    return (
        <>
            <NavBar />
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Learn English <em>with Me</em></strong>
                    </h1>
                    <div className="header__text">
                        <p>Get ready to hop into an exhilarating journey of learning English! Don’t worry, we’ve got you covered like a linguist's blanket.</p>
                    </div>
                    <button className="header-btn"><a href="#!">Sing up</a></button>

                </div>
            </header>
        </>
    )
}
