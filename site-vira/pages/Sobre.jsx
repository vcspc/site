import styles from '../styles/Sobre.module.scss';
import Apresentacao from '../components/Apresentacao';
import Layout from '../components/Layout';

export default function Sobre() {
    return (
        <>
            <Layout>
                <section className={styles.apresentacao}>
                    
                <Apresentacao 
                    src="./vinicius-removebg-preview.png" 
                    alt="Imagem de Vinícius Costa"
                    titulo="Vinícius Costa"
                    subtitulo="Desenvolvedor Web"
                    descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. afhjkhdfieiuh nasjkhkah nkjdhwepç badhiowkj uwedjdfkjnabe wnekjwheidjal njkwaeiuwoifjan jkweiwhfnkankje owewjfh whdkja wheuiwhouehkj naiwunajfniuaow jiwieuw u kjkjarkqwj"
                    sentido="direita"
                />

                <Apresentacao 
                    src="./vinicius-removebg-preview.png" 
                    alt="Imagem de Vinícius Costa"
                    titulo="Vinícius Costa"
                    subtitulo="Desenvolvedor Web"
                    descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. afhjkhdfieiuh nasjkhkah nkjdhwepç badhiowkj uwedjdfkjnabe wnekjwheidjal njkwaeiuwoifjan jkweiwhfnkankje owewjfh whdkja wheuiwhouehkj naiwunajfniuaow jiwieuw u kjkjarkqwj"
                    sentido="esquerda"
                />
                    
                </section>
            </Layout>
        </>
    )
}