import Card from '../components/Card';
import styles from '../styles/Index.module.scss';

export default function Home() {
  return (
    <>
      <section className="apresentacao">
        
        </section>
        <section className={styles.destaques}>
            <div className={styles.divisoria}>
                <hr/>
                <p className={styles.divisoria__texto} >ALGUNS DE NOSSOS ÚLTIMOS TRABALHOS</p>
                <hr/>
            </div>
            <div className={styles.cards} >
              <Card />
              <Card />
              <Card />
                
            </div>
      </section>
    </>
  )
}
