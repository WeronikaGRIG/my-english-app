

export default function CardList({ title, description }) {
    return (
        <li className="card-list">
            {/* <img src="" alt="#" /> */}
            <h2 className="card-list__title">{title}</h2>
            <p className="card-list__descr">{description}</p>
        </li>
    )
}
