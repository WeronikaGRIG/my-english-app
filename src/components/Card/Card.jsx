

export default function Card(props) {
    return (

        <div className="card__item">
            {/* <img src={props.img} alt="#" className="card__icon" />
            <h3 className="title-3">{props.title}
            </h3>
            <p className="card__descr">{props.descr}</p> */}



            <div class="card">
                <img src={props.img} alt="#" className="card__icon" />
                <div class="card__content">
                    <h3 class="card__title">{props.title}</h3>
                    <p class="card__description">{props.descr}</p>

                    {/* перенести в компоненты кнопку */}
                    <button class="card__button">Rules</button>
                    <button class="card__button secondary">Practise</button>
                </div>
            </div>





        </div>





    )
}
