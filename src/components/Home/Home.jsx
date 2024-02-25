import React from 'react'
import './Home.css';
import Cards from '../Cards/Cards';
import { rules } from '../CardsList/CardsList';



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

                        <div className="cards">
                            {rules.map((rule, id) => {
                                return (
                                    <Cards key={id}
                                        title={rule.title}
                                        descr={rule.descr}
                                        img={rule.img}
                                        index={id}
                                    />
                                )
                            }

                            )}
                        </div>




                    </div>
                </div>
            </div>
        </main>
    )
}
