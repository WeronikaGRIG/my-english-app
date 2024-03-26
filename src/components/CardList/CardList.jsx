
import styles from './CardList.module.css';

export default function CardList({ title, description, img }) {
    return (
        <li className={styles.card__list}>
            < img className={styles.card__list_img} src={img} alt={title} />
            <h2 className={styles.card__list_title}>{title}</h2>
            <p className={styles.card__list_descr}>{description}</p>
        </li >
    )
}
