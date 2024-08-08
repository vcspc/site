import styles from '../styles/Sobre.module.scss';
import Apresentacao from '../components/Apresentacao';
import Layout from '../components/Layout';
import Corpo from '../components/Corpo';

// export default function Sobre() {
//     return (
//         <>
//             <Layout>
//                 <section className={styles.apresentacao}>
                    
//                 <Apresentacao 
//                     src="./logo_vira.svg" 
//                     alt="Logo da empresa de marketing Vira"
//                     titulo="Vira"
//                     subtitulo="A empresa"
//                     descricao='Na Vira Marketing Digital, nós acreditamos no poder da tecnologia para transformar o cenário empresarial. Nosso nome, que significa "mudar", "transformar" ou "inverter" em português, reflete nossa essência e missão: virar o jogo a favor de nossos clientes. Somos especialistas em criar estratégias de marketing digital inovadoras que não apenas captam a atenção do público, mas também convertem essa atenção em vendas, lucros e crescimento sustentável.'
//                     sentido="direita"
//                 />

//                 <Apresentacao 
//                     src="./victor_costa_completo.png" 
//                     alt="Imagem do sococio fundador Victor Costa"
//                     titulo="Victor Costa"
//                     subtitulo="Gerente de Marketing"
//                     descricao="Eu sou o Victor Costa, formado em Publicidade e Propaganda pela UNASP em Engenheiro Coelho e fiz meu MBA em Marketing, Branding e Growth pela PUC-RS. Em 2019, tive a honra de estar na Short List de Jovens Talentos no Festival App Campinas. Já são 7 anos trabalhando com marketing digital, onde atuei em agências, portais de notícias e no grupo Martin Holandesa, em Holambra. Ao longo da minha carreira, me especializei em montar e liderar equipes de marketing, além de ajudar vários empreendedores com consultorias e estratégias digitais que realmente fazem a diferença"
//                     sentido="esquerda"
//                 />

//                 <Apresentacao 
//                     src="./vinicius_costa.png" 
//                     alt="Imagem do sococio fundador Vinícius Costa"
//                     titulo="Vinícius Costa"
//                     subtitulo="Desenvolvedor Web"
//                     descricao="Sou Vinicius Costa, um Desenvolvedor Web com 2 anos de experiência. Tenho paixão por tecnologia e estou sempre buscando conhecimentos novos para desenvolver soluções personalizadas que atendem às expectativas dos clientes. Meus códigos são organizados e eficientes, e estou comprometido em entregar sistemas com as melhores práticas."
//                     sentido="direita"
//                 />

//                 <Apresentacao
//                     src="./sevice.svg"
//                     alt="Ilustração de um computador com abas do navegaodr abertas"
//                     titulo="Serviços"
//                     subtitulo="O que oferecemos"

                
                
//                 />
                    
//                 </section>
//             </Layout>
//         </>
//     )
// }

import { useEffect, useState } from 'react';
import useScreenWidth from '../components/UseScreenWidth';

export default function Sobre() {
  const screenWidth = useScreenWidth();
  const sentidoEsquerdo = screenWidth > 414 ? 'esquerda' : 'direita';
  const sentidoDireito = screenWidth > 414 ? 'direita' : 'direita';
  const sentidoLista = screenWidth > 414 ? 'lista' : 'listaDireita';

  

  return (
    <>
      <Layout>
        <section className={styles.apresentacao}>

          <Apresentacao 
              src="./LOGO-01.png" 
              alt="Logo da empresa de marketing Vira"
              titulo="Vira"
              subtitulo="A empresa"
              descricao='Acreditamos no poder transformador da tecnologia e a utilizamos para impulsionar resultados reais para nossos clientes. Nosso nome, "Vira", reflete nossa missão: virar o jogo a seu favor, invertendo a lógica do mercado e transformando desafios em oportunidades. Somos especialistas em estratégias de marketing digital que vão além de likes e visualizações. Nosso foco é gerar resultados tangíveis: aumento de vendas, maximização de lucros e crescimento sustentável para o seu negócio. Com a Vira Marketing Digital, você não está apenas investindo em marketing, está investindo no futuro da sua empresa.'
              sentido={sentidoDireito}
          />

          

          <Apresentacao 
              src="./victor_costa_completo.png" 
              alt="Imagem do sococio fundador Victor Costa"
              titulo="Victor Costa"
              subtitulo="Estrategista de Marketing"
              descricao="Olá, me chamo Victor Costa, sou formado em Publicidade e Propaganda pelo UNASP-EC com MBA em MARKETING, BRANDING E GROWTH pela PUC-RS. Tenho experiência em agências, portais de notícias e grandes empresas como o grupo de restaurantes Martin Holandesa. Minha paixão é construir e liderar equipes de alta performance, transformando estratégias digitais em resultados reais para negócios de todos os portes. Ao longo de 8 anos de carreira, fui reconhecido como um dos Jovens Talentos no Festival App Campinas e ajudei diversos empreendedores a alcançar seus objetivos através de consultorias personalizadas e soluções inovadoras."
              sentido={sentidoEsquerdo}
          />

          <Apresentacao 
              src="./vinicius_costa.png" 
              alt="Imagem do sococio fundador Vinícius Costa"
              titulo="Vinícius Costa"
              subtitulo="Desenvolvedor Web"
              descricao="Sou Vinicius Costa, um Desenvolvedor Web com 2 anos de experiência. Tenho paixão por tecnologia e estou sempre buscando conhecimentos novos para desenvolver soluções personalizadas que atendem às expectativas dos clientes. Meus códigos são organizados e eficientes, e estou comprometido em entregar sistemas com as melhores práticas."
              sentido={sentidoDireito}
          />

          {/* <Apresentacao
              src="./service.svg"
              alt="Ilustração de um computador com abas do navegaodr abertas"
              titulo="Serviços"
              subtitulo="O que oferecemos"
              sentido={sentidoLista}
              itens={[
                "SEO",
                "Marketing Digital",
                "Campanhas de Publicidade",
                "Gestão de Redes Sociais",
                "Sites e Lojas Online",
                "E-commerce",
                "Desenvolvimento Web"
              ]}
          /> */}
              
        </section>
      </Layout>
    </>
  )
}
