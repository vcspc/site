import styles from '../styles/Formulario.module.scss';

export default function Formulario() {
    return (
            <>
                <form className={styles.form} action="" method="post" id="email">
                    <div className={styles.container_id}>
                        <h2 className={styles.titulo}>Envie um email</h2>
                        <label className={styles.label} for="nome">Nome:</label>
                        <input className={styles.input} type="text" name="nome" id="nome"/>
                        <label className={styles.label} for="email">Email:</label>
                        <input className={styles.input} type="email" name="email" id="email"/>
                    </div>
                    <div className={styles.container_mensagem}>
                        <label for="mensagem" className={styles.mensagem}>Mensagem:</label>
                        <textarea className={styles.textarea} name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
                    </div>
                </form>
                <div className={styles.container}>
                    <button className={styles.button} form="email">Enviar email</button>
                </div>
            
            </>
    );
}