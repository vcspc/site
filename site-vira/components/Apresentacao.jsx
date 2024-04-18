import styles from '../styles/Apresentacao.module.scss';

export default function Apresentacao(props) {
    
    if (props.sentido ==="direita") {
        return (
            <div className={styles.sobre__direita}>
                <div className={styles.sobre__texto__direita}>
                    <h2 className={styles.sobre__texto__titulo__direita}>{props.titulo}</h2>
                    <h3 className={styles.sobre__texto__subtitulo__direita}>{props.subtitulo}</h3>
                    <p className={styles.sobre__texto__conteudo__direita}>{props.descricao}</p>
                </div>
                <div className={styles.sobre__img__direita}>
                    <img src={props.src}    /* "./vinicius-removebg-preview.png" */ alt={props.alt}/>
                </div>     
            </div>
        )
    }

    if (props.sentido === "esquerda") {
        
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

    if (props.sentido === "lista") {

        return (
            <div className={styles.sobre}>
                <div className={styles.sobre__img}>
                    <img src={props.src} alt={props.alt}/>
                </div>
                <div className={styles.sobre__texto}>
                    <h2 className={styles.sobre__texto__titulo}>{props.titulo}</h2>
                    <h3 className={styles.sobre__texto__subtitulo}>{props.subtitulo}</h3>
                    <ul className={styles.lista}>
                        {props.itens.map((item, index) => (
                            <li key={index} className={styles.item}>{item}</li>
                        ))}
                    </ul>
                </div>  
            </div>

        )  
    
    
    }

    if (props.sentido === "listaDireita") {

        return (
            <div className={styles.sobre}>
                <div className={styles.sobre__texto}>
                    <h2 className={styles.sobre__texto__titulo}>{props.titulo}</h2>
                    <h3 className={styles.sobre__texto__subtitulo}>{props.subtitulo}</h3>
                    <ul className={styles.lista}>
                        {props.itens.map((item, index) => (
                            <li key={index} className={styles.item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.sobre__img}>
                    <img src={props.src} alt={props.alt}/>
                </div> 
            </div>

        )  
    
    
    }

}