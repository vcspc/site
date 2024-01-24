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
                        alt="Logo da empresa Vira"
                        titulo="portifólio."
                        subtitulo="Confira alguns dos trabalhos de Marketing que participamos"
                        descricao="Temos experiencia no desenvolvimento de sites, aplicativos, campanhas de Marketing com grandes empresas como Heineken, Restaurantes e Influenciadores Digitais. Buscamos sempre impulsionar nossos clientes"
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
                    src='./logo_heineken.png'
                    alt='Imagem do logo da marca Heineken' 
                    titulo="Projeto com a Heineken" 
                    descricao="Lançamento de uma estação de coleta de long neck Heineken"
                    />
                    <Card 
                    src='./amstel_logo.jpg' 
                    alt="Imagem da marca Amstel" 
                    titulo="Projeto com a Amstel" 
                    descricao="Lançamento do De Dam - Snack Bar em Holambra" 
                    />
                    <Card 
                    src="./influenciadores.png" 
                    alt="Imagem com vários influenciadores digitais" 
                    titulo="Projetos com Influenciadores Digitais" 
                    descricao="Trabalhos desenvolvidos com diferentes influenciadores no Instagram" 
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