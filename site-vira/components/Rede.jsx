import Link from 'next/link';
import styles from '../styles/Rede.module.scss';

export default function Rede(props) {
    return (
        <div className={styles.rede}>
            <Link href={props.link}>
                <img className={styles.rede__img} src={props.src} alt={props.alt} />
                <p className={styles.rede__texto}>{props.texto}</p>
            </Link>
        </div>
    );
}