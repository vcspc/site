import Layout from '../components/Layout';
import Apresentacao from '../components/Apresentacao';
import styles from '../styles/Portifolio.module.scss';
import Card from '../components/Card';



export default function Portifolio() {
    return (
        <>
            <Layout>
                <div className={styles.apresentacao}>
                    <Apresentacao
                        src="./logo_vira.svg" 
                        alt="Imagem de Vinícius Costa"
                        titulo="portifólio."
                        subtitulo="Desenvolvedor Web"
                        descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. afhjkhdfieiuh nasjkhkah nkjdhwepç badhiowkj uwedjdfkjnabe wnekjwheidjal njkwaeiuwoifjan jkweiwhfnkankje owewjfh whdkja wheuiwhouehkj naiwunajfniuaow jiwieuw u kjkjarkqwj"
                        sentido="direita"
                    />
                </div>
                <div className={styles.portifolio}>
                    <Card 
                    src="./bussola.png" 
                    alt="Imagem de um projeto de landing page chamado Bússola do Escritor" 
                    titulo="Landing page Bússola do Escritor" 
                    descricao="Landing page desenvolvida para o projeto Bússola do Escritor" 
                    />
                    <Card 
                    src='./livro.png' 
                    alt="Imagem de um projeto de landing page de promoção do livro Nós Estivemos Aqui" 
                    titulo="Landing page Nós Estivemos Aqui" 
                    descricao="Landing page desenvolvida para o projeto de promoção do livro Nós Estivemos Aqui" 
                    />
                    <Card 
                    src='./oliveage.png'
                    alt='Imagem do projeto de landing page da marca Oliveage' 
                    titulo="Landing page da marca Oliveage" 
                    descricao="Landing page desenvolvida para o projeto da marca Olivage"
                    />
                    <Card 
                    src='./oliveage.png'
                    alt='Imagem do projeto de landing page da marca Oliveage' 
                    titulo="Landing page da marca Oliveage" 
                    descricao="Landing page desenvolvida para o projeto da marca Olivage"
                    />
                    <Card 
                    src='./livro.png' 
                    alt="Imagem de um projeto de landing page de promoção do livro Nós Estivemos Aqui" 
                    titulo="Landing page Nós Estivemos Aqui" 
                    descricao="Landing page desenvolvida para o projeto de promoção do livro Nós Estivemos Aqui" 
                    />
                    <Card 
                    src="./bussola.png" 
                    alt="Imagem de um projeto de landing page chamado Bússola do Escritor" 
                    titulo="Landing page Bússola do Escritor" 
                    descricao="Landing page desenvolvida para o projeto Bússola do Escritor" 
                    />
                    <Card 
                    src="./bussola.png" 
                    alt="Imagem de um projeto de landing page chamado Bússola do Escritor" 
                    titulo="Landing page Bússola do Escritor" 
                    descricao="Landing page desenvolvida para o projeto Bússola do Escritor" 
                    />
                    <Card 
                    src='./oliveage.png'
                    alt='Imagem do projeto de landing page da marca Oliveage' 
                    titulo="Landing page da marca Oliveage" 
                    descricao="Landing page desenvolvida para o projeto da marca Olivage"
                    />
                    <Card 
                    src="./bussola.png" 
                    alt="Imagem de um projeto de landing page chamado Bússola do Escritor" 
                    titulo="Landing page Bússola do Escritor" 
                    descricao="Landing page desenvolvida para o projeto Bússola do Escritor" 
                    />

                </div>

                
            </Layout>
        </>
    )
}