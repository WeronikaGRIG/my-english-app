
import './Card.css';
import CardList from '../CardList/CardList.jsx';
import { data } from '../../data.js';


export default function Card() {
    return (
        <div className='cards'>
            <div className="container">
                <div className="cards__wrapper">
                    <ul className="card">
                        {data.map((card, i) => {
                            return (
                                <CardList key={i} {...card} />
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* <details>
                <summary>Clup!</summary>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eligendi iusto necessitatibus deleniti animi provident. Doloremque ex beatae atque earum. Eum, vel? Reiciendis molestiae dolore, corporis voluptates voluptas saepe ducimus.</p>
            </details> */}
        </div>
    )
}
