import Card from '../components/Card';
import styles from '../styles/Index.module.scss';
import Layout from '../components/Layout';
import Slider2 from '../components/Slider2';

export default function Home() {
  return (
    <>
      <Layout>
        <section className={styles.apresentacao}>
          <Slider2 />
          <div className={styles.socios}>
            <p className={styles.marketing}>marketing</p>
            <img src="./juncao.svg" alt="Imagem dos socios unidas" />
            <p className={styles.codigo}>{"<"}código{">"}</p>
          </div>
        </section>
          <section className={styles.destaques}>
              <div className={styles.divisoria}>
                  <hr/>
                  <p className={styles.divisoria__texto} >ALGUNS DE NOSSOS ÚLTIMOS TRABALHOS</p>
                  <hr/>
              </div>
              <div className={styles.cards} >
                <Card 
                  src="./bussola.PNG" 
                  alt="Imagem de um projeto de landing page chamado Bússola do Escritor" 
                  titulo="Landing page Bússola do Escritor" 
                  descricao="Landing page desenvolvida para o projeto Bússola do Escritor" 
                  />
                <Card 
                  src='./livro.PNG' 
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
                  
              </div>
        </section>
      </Layout>
    </>
  )
}
