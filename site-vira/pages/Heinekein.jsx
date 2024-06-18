
import Layout from '../components/Layout';
import Apresentacao from '../components/Apresentacao';
import useScreenWidth from '../components/UseScreenWidth';
import Galeria from '../components/Galeria';
import Corpo from '../components/Corpo';

export default function Heinekein() {

    const screenWidth = useScreenWidth();
    const sentidoEsquerdo = screenWidth > 412 ? 'esquerda' : 'direita';
    const sentidoDireito = screenWidth > 412 ? 'direita' : 'direita';
    const sentidoLista = screenWidth > 412 ? 'lista' : 'listaDireita';


    return (
        <>
            <Layout>
                <Apresentacao 
                    src="./heinekein.png" 
                    alt="Logo da empresa de marketing Vira"
                    titulo="Estação Heinekein"
                    subtitulo="Lançamento de uma Estação de Coleta de Long Neck Heineken"
                    descricao="Orquestramos o lançamento do De Dam em parceria com a Amstel, o primeiro Snack Bar de Holambra inspirado na vibrante cena de Amsterdam.Para apresentar essa experiência única, convidamos 20 influenciadores da região para um exclusivo jantar de pré-lançamento, embalado em uma caixa de presentes com a temática holandesa do bar."
                    sentido={sentidoDireito}
                />
                <Galeria 
                    imagens={[
                        './heinekein.png',
                        './heinekein2.png',
                       
                    ]}
                    
                    slides={2}
                    
                    largura="25rem"
                />

                <Corpo
                    texto="A campanha se estendeu aos seguidores dos influenciadores, com um sorteio de um kit exclusivo e um convite para o pré-lançamento. O resultado? Mais de 600 stories e posts, alcançando mais de 70 mil pessoas em Holambra e região, gerando um burburinho irresistível em torno do De Dam."
                />
                
            </Layout>
        </>
    )
}