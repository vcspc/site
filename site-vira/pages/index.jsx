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
                    src='./logo_martin_holandesa.png'
                    alt='Imagem do logo da empresa Martin Holandesa' 
                    titulo="Campanha de 67 anos da Martin Holandesa" 
                    descricao="Criação da campanha de 67 anos da Martin Holandesa"
                    link="/TresCoracoes" 
                />
                  
              </div>
        </section>
      </Layout>
    </>
  )
}
