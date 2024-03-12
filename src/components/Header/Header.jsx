
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
                        <p>Приготовтесь к увлекательному путешествию по изучению английского языка!</p>
                    </div>
                    <button className="header-btn"><a href="#!">Войти</a></button>

                </div>
            </header>
        </>
    )
}
