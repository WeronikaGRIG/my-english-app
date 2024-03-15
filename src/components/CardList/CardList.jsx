
export default function CardList({ title, description, img }) {
    return (
        <li className="card-list">
            <img className="card-list__img" src={img} alt={title} />
            <h2 className="title-3">{title}</h2>
            <p className="card-list__descr">{description}</p>
        </li>
    )
}
