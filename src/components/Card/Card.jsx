import React from 'react'

import CardList from '../CardList/CardList.jsx';


export default function Card() {
    return (
        <section className='section'>
            <div className="container">
                {/* <h2 className="title-1">Learn <span>Words</span></h2> */}

                <ul className="cards">
                    <CardList />

                </ul>
            </div>

        </section>
    )
}
