
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
                    src="./logo_heineken.jpg" 
                    alt="Logo da empresa de marketing Vira"
                    titulo="Estação Heinekein"
                    subtitulo="Lançamento de uma Estação de Coleta de Long Neck Heineken"
                    descricao="Em colaboração com a Heineken e a Martin Holandesa, contribuímos para o lançamento e aquisição de clientes ao estabelecer uma Estação de Coleta de Garrafas Long Neck Heineken. A estação visava incentivar a comunidade de Holambra e arredores a reciclar garrafas de vidro Long Neck Heineken. Os consumidores recebiam uma garrafa Long Neck Heineken adicional ao depositar 12 garrafas na estação e consumir um valor mínimo de R$ 50,00 no restaurante."
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
                
            </Layout>
        </>
    )
}