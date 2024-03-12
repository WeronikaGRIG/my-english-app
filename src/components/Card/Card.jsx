
import './Card.css';
import CardList from '../CardList/CardList.jsx';
import { list } from './list.js';


export default function Card() {
    return (
        <div className='cards'>
            <div className="container">
                <div className="cards__wrapper">
                    <ul className="card">
                        {list.map((card, i) => {
                            return (
                                <CardList key={i} {...card} />
                            )
                        })}
                    </ul>
                </div>



            </div>

        </div>
    )
}
