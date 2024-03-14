
export default function CardList({ title, description, img }) {
    return (
        <li className="card-list">
            <img className="card-list__img" src={img} alt={title} />
            <h2 className="card-list__title">{title}</h2>
            <p className="card-list__descr">{description}</p>
        </li>
    )
}
