
import './NavBar.css'

export default function NavBar() {

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <a href="./index.html" className="logo"><strong>Learn<em> English</em></strong></a>

                    {/* вынести кнопку в отдельный компонент */}

                    <button className="dark-mode-btn">
                        <a href="#!" className="btn">Войти</a>
                    </button>

                    <button className="dark-mode-btn"><a href="#!">Авторизоваться</a></button>

                    <ul className="nav-list">
                        <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Главная</a></li>
                        <li className="nav-list__item"><a href="./vocab.html" className="nav-list__link">Учить слова</a></li>
                        <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}