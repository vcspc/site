import styles from '../styles/Galeria.module.scss';

export default function Galeria(props) {
    return (
        <div className={styles.galeria}>
            {props.imagens.map((imagem, index) => (
                <img key={index} src={imagem} alt={`Imagem ${index+1}`} className={styles.galeria_imagem}/>
            ))}
        </div>
    );
}


