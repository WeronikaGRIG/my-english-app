import React from 'react'
import './Home.css';
import Card from '../Card/Card';


export default function Home() {
    return (
        <main className="main">
            <div className="container">

                <div className="content-wrapper">

                    <div className="content-list">
                        <div className="content-list__item">
                            <h3 className="title-2">Let’s dive into the realm of words!</h3>
                            <p>Our digital flashcards will intuitively enhance your vocabulary. Remember, Rome wasn’t built in a day, and neither is your vocab!</p>
                        </div>

                        {/* вынести кнопки в отдельный компонент*/}
                        <div className="content-levels">
                            <button className="content-levels__btn">Beginner</button>
                            <button className="content-levels__btn">Intermediate</button>
                            <button className="content-levels__btn">Advanced</button>
                        </div>

                        {/* вынести карточки в отдельный компонент pages/Vocab, не забыть про импорты*/}
                        <Card />






                    </div>
                </div>
            </div>
        </main>
    )
}
