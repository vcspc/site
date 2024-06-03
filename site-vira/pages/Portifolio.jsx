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
                    src="./bussola.PNG" 
                    alt="Imagem de um projeto de landing page chamado Bússola do Escritor" 
                    titulo="Landing page Bússola do Escritor" 
                    descricao="Landing page desenvolvida para o projeto Bússola do Escritor"
                    link="https://curso.autorpedrochester.com.br" 
                    />
                    <Card 
                    src='./livro.PNG' 
                    alt="Imagem de um projeto de landing page de promoção do livro Nós Estivemos Aqui" 
                    titulo="Landing page Nós Estivemos Aqui" 
                    descricao="Landing page desenvolvida para o projeto de promoção do livro Nós Estivemos Aqui"
                    link="https://nosestivemosaqui.autorpedrochester.com.br/" 
                    />
                    <Card 
                    src='./oliveage.png'
                    alt='Imagem do projeto de landing page da marca Oliveage' 
                    titulo="Landing page da marca Oliveage" 
                    descricao="Landing page desenvolvida para o projeto da marca Olivage"
                    link="https://oliveage.com.br/" 
                    />
                    <Card 
                    src='./logo_heineken.png'
                    alt='Imagem do logo da marca Heineken' 
                    titulo="Projeto com a Heineken" 
                    descricao="Lançamento de uma estação de coleta de long neck Heineken"
                    link="/Heinekein" 
                    />
                    <Card 
                    src='./amstel_logo.jpg' 
                    alt="Imagem da marca Amstel" 
                    titulo="Projeto com a Amstel" 
                    descricao="Lançamento do De Dam - Snack Bar em Holambra" 
                    link="/Amstel" 
                    />
                    <Card 
                    src="./influenciadores.png" 
                    alt="Imagem com vários influenciadores digitais" 
                    titulo="Projetos com Influenciadores Digitais" 
                    descricao="Trabalhos desenvolvidos com diferentes influenciadores no Instagram" 
                    link="#" 
                    />
                    <Card 
                    src="./clube_de_vantagens.png" 
                    alt="Imagem de apresentação de um clube de vantagens" 
                    titulo="Projeo de Clube de Vantagens" 
                    descricao="Clube de Vantagens desenvolvido para o setor corporativo" 
                    link="/ClubeDeVantagens" 
                    />
                    <Card 
                    src='./logo_martin_holandesa.png'
                    alt='Imagem do logo da empresa Martin Holandesa' 
                    titulo="Campanha de 67 anos da Martin Holandesa" 
                    descricao="Criação da campanha de 67 anos da Martin Holandesa"
                    link="/TresCoracoes" 
                    />
                    <Card 
                    src="./dia_das_maes.png" 
                    alt="Imagem de mãe e filha se abraçando" 
                    titulo="Campanha do Dia das Mães" 
                    descricao="Campanha do dia das mães para aproximar o público femenino" 
                    link="/DiaDasMaes" 
                    />

                </div>

                
            </Layout>
        </>
    )
}