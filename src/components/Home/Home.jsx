import React from 'react'
import './Home.css';

export default function Home() {
    return (
        <main>
            <div className="container">

                <div className="content-wrapper">

                    <div className="content-list">
                        <div className="content-list__item">
                            <h3 className="title-2">Let’s dive into the realm of words!</h3>
                            <p>Our digital flashcards will intuitively enhance your vocabulary. Remember, Rome wasn’t built in a day, and neither is your vocab!</p>
                        </div>

                        <div className="content-levels">
                            <button className="content-levels__btn">Beginner</button>
                            <button className="content-levels__btn">Intermediate</button>
                            <button className="content-levels__btn">Advanced</button>
                        </div>

                        <div className="content-cards">
                            <ul className="content-card__item">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
