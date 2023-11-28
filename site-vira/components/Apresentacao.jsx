import styles from '../styles/Apresentacao.module.scss';

export default function Apresentacao(props) {
    return (
        <div className={styles.sobre}>
            <div className={styles.sobre__img}>
                <img src={props.src}    /* "./vinicius-removebg-preview.png" */ alt={props.alt}/>
            </div>
            <div className={styles.sobre__texto}>
                <h2 className={styles.sobre__texto__titulo}>{props.titulo}</h2>
                <h3 className={styles.sobre__texto__subtitulo}>{props.subtitulo}</h3>
                <p className={styles.sobre__texto__conteudo}>{props.descricao}</p>
            </div>
                    
        </div>
    )
}