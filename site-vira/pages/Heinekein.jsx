
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
                    src="./vinicius_costa.png" 
                    alt="Logo da empresa de marketing Vira"
                    titulo="Estação Heinekein"
                    subtitulo="Através da parceria de Heinekein e Martin  Holandesa..."
                    descricao="Na Vira Marketing Digital, nós acreditamos no poder da tecnologia para transformar o cenário empresarial. Nosso nome, que significa 'mudar', 'transformar' ou 'inverter' em português, reflete nossa essência e missão: virar o jogo a favor de nossos clientes. Somos especialistas em criar estratégias de marketing digital inovadoras que não apenas captam a atenção do público, mas também convertem essa atenção em vendas, lucros e crescimento sustentável."
                    sentido={sentidoDireito}
                />
                <Galeria 
                    imagens={[
                        './heinekein.png',
                        './heinekein2.png',
                       
                    ]}
                    
                    slides={2}
                    
                    largura="10rem"
                />
                <Corpo 
                    titulo="Victor Costa"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </Layout>
        </>
    )
}