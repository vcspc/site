import styles from '../styles/Sobre.module.scss';
import Apresentacao from '../components/Apresentacao';
import Layout from '../components/Layout';

export default function Sobre() {
    return (
        <>
            <Layout>
                <section className={styles.apresentacao}>
                    <div className={styles.geral}>
                        <div className={styles.geral__texto}>
                            <h1 className={styles.geral__texto__titulo}>sobre.</h1>
                            <h3 className={styles.geral__texto__subtitulo}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p className={styles.geral__texto__paragrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sit harum quisquam veniam et dolorem quaerat soluta porro commodi fuga voluptatum, eum labore magnam obcaecati. Repudiandae dolore cumque excepturi. Perspiciatis!</p>
                        </div>
                        <div className={styles.geral__img}>
                            <img src="./src/sketch_clipdrop-background-removal (1).png" alt="Imagem de Vinícius Costa"/>
                        </div>
                    </div>
                <Apresentacao 
                    src="./vinicius-removebg-preview.png" 
                    alt="Imagem de Vinícius Costa"
                    titulo="Vinícius Costa"
                    subtitulo="Desenvolvedor Web"
                    descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. afhjkhdfieiuh nasjkhkah nkjdhwepç badhiowkj uwedjdfkjnabe wnekjwheidjal njkwaeiuwoifjan jkweiwhfnkankje owewjfh whdkja wheuiwhouehkj naiwunajfniuaow jiwieuw u kjkjarkqwj"
                />
                    
                </section>
            </Layout>
        </>
    )
}