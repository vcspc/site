import styles from '../styles/Card.module.scss';

export default function Card(props){
    return(
        <div className={styles.card} >
            <img className={styles.card_img} src={props.src} alt={props.alt}/>
            <h2 className={styles.card_titulo} >{props.titulo}</h2>
            <p className={styles.card_descricao} >{props.descricao}</p>
        </div>

    )
}