import styles from '../styles/Corpo.module.scss'

export default function Corpo(props) {
    return (
        <div className={styles.corpo}>
            <h3 className={styles.titulo}>{props.titulo}</h3>
            <p className={styles.texto}>{props.texto}</p>
        </div>
    )
}