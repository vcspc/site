import Rede from "../components/Rede";
import styles from "../styles/Redes.module.scss";

export default function Redes() {
    return (
        <div className={styles.container__contato}>  
            <div className={styles.container__redes}>
                <div className={styles.container__redes__texto}>
                    <h1 className={styles.container__redes__texto__titulo}>contato.</h1>
                    <p className={styles.container__redes__texto__descricao}>Entre em contato pelas redes sociais ou por email.</p>
                </div>
                <div className={styles.container__redes__social}>
                    <Rede 
                        src="./Instagram.png" 
                        alt="Logo do Instagram"
                        link="https://www.instagram.com/victorcostamkt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        texto="Instagram"
                        cor="#ef659c"
                    />
                    { /* <Rede 
                        src="./linkedin.png" 
                        alt="Logo do Linkedin"
                        link="https://www.linkedin.com/in/vinicius-costa/"
                        texto="Linkedin"
                        cor="#107db7"
                    /> */}
                    { /* <Rede 
                        src="./Tiktok.svg" 
                        alt="Logo do Tiktok"
                        link="https://www.instagram.com/viniciuscosta.dev/"
                        texto="Tiktok"
                        cor="#000000"
                    /> */}
                    <Rede 
                        src="./facebook.png" 
                        alt="Logo do Facebook"
                        link="https://twitter.com/viniciuscosta"
                        texto="Facebook"
                        cor="#1a4789"
                    /> 
                </div>
            </div>
            <img src="./LOGO-01.png" alt="Logo da empresa Vira" className={styles.logo} />
        </div>

    )
}