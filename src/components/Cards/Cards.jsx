

export default function Cards(props) {
    return (

        <div className="card__item">
            <img src={props.img} alt="#" className="card__icon" />
            <h3 className="title-3">{props.title}
            </h3>
            <p className="card__descr">{props.descr}</p>
        </div>

    )
}
