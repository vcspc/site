import styles from '../styles/Sobre.module.scss';
import Apresentacao from '../components/Apresentacao';
import Layout from '../components/Layout';

export default function Sobre() {
    return (
        <>
            <Layout>
                <section className={styles.apresentacao}>
                    
                <Apresentacao 
                    src="./logo_vira.svg" 
                    alt="Logo da empresa de marketing Vira"
                    titulo="Vira"
                    subtitulo="A empresa"
                    descricao='Na Vira Marketing Digital, nós acreditamos no poder da tecnologia para transformar o cenário empresarial. Nosso nome, que significa "mudar", "transformar" ou "inverter" em português, reflete nossa essência e missão: virar o jogo a favor de nossos clientes. Somos especialistas em criar estratégias de marketing digital inovadoras que não apenas captam a atenção do público, mas também convertem essa atenção em vendas, lucros e crescimento sustentável.'
                    sentido="direita"
                />

                <Apresentacao 
                    src="./victor_costa_completo.png" 
                    alt="Imagem do sococio fundador Victor Costa"
                    titulo="Victor Costa"
                    subtitulo="Gerente de Marketing"
                    descricao="Eu sou o Victor Costa, formado em Publicidade e Propaganda pela UNASP em Engenheiro Coelho e fiz meu MBA em Marketing, Branding e Growth pela PUC-RS. Em 2019, tive a honra de estar na Short List de Jovens Talentos no Festival App Campinas. Já são 7 anos trabalhando com marketing digital, onde atuei em agências, portais de notícias e no grupo Martin Holandesa, em Holambra. Ao longo da minha carreira, me especializei em montar e liderar equipes de marketing, além de ajudar vários empreendedores com consultorias e estratégias digitais que realmente fazem a diferença"
                    sentido="esquerda"
                />

                <Apresentacao 
                    src="./vinicius_costa.png" 
                    alt="Imagem do sococio fundador Vinícius Costa"
                    titulo="Vinícius Costa"
                    subtitulo="Desenvolvedor Web"
                    descricao="Sou Vinicius Costa, um Desenvolvedor Web com 2 anos de experiência. Tenho paixão por tecnologia e estou sempre buscando conhecimentos novos para desenvolver soluções personalizadas que atendem às expectativas dos clientes. Meus códigos são organizados e eficientes, e estou comprometido em entregar sistemas com as melhores práticas."
                    sentido="direita"
                />

                <Apresentacao
                    src="./sevice.svg"
                    alt="Ilustração de um computador com abas do navegaodr abertas"
                    titulo="Serviços"
                    subtitulo="O que oferecemos"

                
                
                />
                    
                </section>
            </Layout>
        </>
    )
}