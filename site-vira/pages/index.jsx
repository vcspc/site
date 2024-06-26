import Card from '../components/Card';
import styles from '../styles/Index.module.scss';
import Layout from '../components/Layout';
import Slider2 from '../components/Slider2';
import Apresentacao from '@/components/Apresentacao';
import Link from 'next/link';

export default function Home() {

  const nVira = "<strong>Vira</strong>" 
  const r2 = 4

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

              <div className={styles.projetos}>

                <div className={styles.cards} >
                  <Card 
                      src='./heinekein_capa.png'
                      alt='Imagem de capa com comemoração da estação de coleta de long neck Heineken' 
                      titulo="Projeto com a Heineken" 
                      descricao="Lançamento de uma estação de coleta de long neck Heineken"
                      link="/Heinekein" 
                  />
                  <Card 
                      src='./snack_bar_dedam.png' 
                      alt="Imagem de capa do projeto De Dam - Snack Bar em Holambra" 
                      titulo="Projeto com a Amstel" 
                      descricao="Lançamento do De Dam - Snack Bar em Holambra" 
                      link="/Amstel" 
                  />
                  <Card 
                      src='./capa_aniverssario.png'
                      alt='Imagem de capa da campanha de 67 anos da Martin Holandesa' 
                      titulo="Campanha de 67 anos da Martin Holandesa" 
                      descricao="Em parceria com a 3 Corações"
                      link="/TresCoracoes" 
                  />
                    
                </div>

              </div>
        </section>

        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Apresentacao 
            texto="Cansado de promessas vazias e resultados medíocres no marketing da sua empresa?"
            src="./empresario_frustrado.svg"
            alt="Imagem de um empresário frustrado"
            sentido="destaqueImagem"
          />

          <Apresentacao 
            texto1A="Na "
            negritoA="Vira Negócios"
            texto1B=", não prometemos milagres, "
            negritoB="entregamos resultados"
            texto1C=". Nosso nome não é à toa: viramos o jogo a favor dos nossos clientes, transformando suas estratégias digitais em verdadeiras máquinas de crescimento."
            texto2A="Dominamos as ferramentas mais avançadas e as tendências mais recentes, mas nosso "
            negrito2="maior diferencial "
            texto2B="é a paixão por entender a fundo o seu negócio e seus objetivos."
            src="./laptop.svg"
            alt="Imagem de um laptop com uma seta ascendente saindo da tela do laptop"
            sentido="imagemCentro"
          />

          <Apresentacao 
            texto="Não queremos apenas mais um cliente, queremos ser o parceiro estratégico que vai impulsionar o seu sucesso"
            src="./foguete.svg"
            alt="Ilustração de um foguete com duas pessoas dentro, deixando um rastro no céu"
            sentido="imagemAbaixo"
          />

          <Apresentacao 
            texto1="Invista em quem realmente entende do assunto e está pronto para virar a página da sua história no digital"
            texto2="Agende uma consultoria gratuita e descubra como podemos transformar o seu negócio"
            src="./logo_vira.png"
            alt="Logotipo da empresa Vira Negócios"
            botao="AGENDE AQUI"
            link="https://wa.me/5511977676130"
            sentido="textoImagemBotao"
          />

          <Apresentacao 
            src="./service.svg"
            alt="Ilustração de um computador com abas do navegaodr abertas"
            titulo="Nossos Serviços"
            subtitulo="O que oferecemos"
            sentido="listaDireita2"
            itens={[
              {img: "./icone_foguete.svg", item: "SEO", descricao: "Otimização de sites e conteúdo para melhor ranqueamento nos resultados de pesquisa orgânica, aumentando a visibilidade online da sua empresa."},
              {img: "./icone_foguete.svg", item: "Marketing Digital", descricao: "Conjunto de estratégias online para atrair, converter e fidelizar clientes, utilizando canais como SEO, mídias sociais, email marketing, etc."},
              {img: "./icone_foguete.svg", item: "Campanhas de Publicidade", descricao: "Criação e gerenciamento de anúncios pagos em plataformas como Google Ads, Facebook Ads, Instagram Ads, etc., para alcançar um público específico e gerar resultados."},
              {img: "./icone_foguete.svg", item: "Gestão de Redes Sociais", descricao: "Criação e gerenciamento de perfis em redes sociais como Facebook, Instagram, Twitter, etc., para construir relacionamento com o público, divulgar sua marca e gerar leads."},
              {img: "./icone_foguete.svg", item: "Sites e Lojas Online", descricao: "Criação, desenvolvimento e manutenção de sites e lojas virtuais personalizados para sua empresa, otimizados para conversão e experiência do usuário."},
              {img: "./icone_foguete.svg", item: "E-commerce", descricao: "Implementação e gestão de plataformas de e-commerce para venda de produtos ou serviços online, com foco em segurança, logística e atendimento ao cliente."},
              {img: "./icone_foguete.svg", item: "Desenvolvimento Web", descricao: "Criação de websites e aplicações web sob medida para as necessidades da sua empresa, utilizando tecnologias modernas e design responsivo."}
            ]}
          
          />


        </section>

        <section className={styles.destaques}>

              <div className={styles.divisoria}>
                  <hr/>
                  <p className={styles.divisoria__texto} >VEJA NOSSOS PRINCIPAIS PROJETOS</p>
                  <hr/>
              </div>

              <div className={styles.projetos}>

                <Link href="./Portifolio" className={styles.vejamais} >Veja mais</Link>

                <div className={styles.cards}>

                    <Card 
                        src='./heinekein_capa.png'
                        alt='Imagem de capa com comemoração da estação de coleta de long neck Heineken' 
                        titulo="Projeto com a Heineken" 
                        descricao="Lançamento de uma estação de coleta de long neck Heineken"
                        link="/Heinekein" 
                    />
                    <Card 
                        src='./snack_bar_dedam.png' 
                        alt="Imagem de capa do projeto De Dam - Snack Bar em Holambra" 
                        titulo="Projeto com a Amstel" 
                        descricao="Lançamento do De Dam - Snack Bar em Holambra" 
                        link="/Amstel" 
                    />
                    <Card 
                        src='./capa_aniverssario.png'
                        alt='Imagem de capa da campanha de 67 anos da Martin Holandesa' 
                        titulo="Campanha de 67 anos da Martin Holandesa" 
                        descricao="Em parceria com a 3 Corações"
                        link="/TresCoracoes" 
                    />

                </div>

              </div> 

        </section>

      </Layout>
    </>
  )
}
