import Layout from '../components/Layout';
import Apresentacao from '../components/Apresentacao';
import useScreenWidth from '../components/UseScreenWidth';
import GaleriaVideo from '../components/GaleriaVideo';
import Corpo from '@/components/Corpo';


export default function Amistel() {

    const screenWidth = useScreenWidth();
    const sentidoEsquerdo = screenWidth > 412 ? 'esquerda' : 'direita';
    const sentidoDireito = screenWidth > 412 ? 'direita' : 'direita';
    const sentidoLista = screenWidth > 412 ? 'lista' : 'listaDireita';


    return (
        <>
            <Layout>
                <Apresentacao 
                    src="./cafe_3_coracoes_logo.svg" 
                    alt="Logo da empresa 3 Coracões"
                    titulo="Aniversário de 67 anos Martin Holandesa"
                    subtitulo="Em parceria com a 3 Corações"
                    descricao="Em Parceria com a 3 Corações Criamos uma campanha de 67 anos da Martin Holandesa. A ação tinha o objetivo de lembrar o público da tradição e autoridade que a marca tem como confeitaria em Holambra.
                    Foi realizado um sorteio com uma máquina de café 3 corações, cestas com produtos Martin e 3 Corações, além de um vale de jantar com direito a acompanhante. Para participar, o cliente devia postar uma foto dentro do ambiente da Martin, consumido um dos pratos do cardápio principal."
                    sentido={sentidoDireito}
                />
                <GaleriaVideo 
                    videos={[
                        './67anos.mp4'
                        
                       
                    ]}
                    
                    slides={1}
                    
                    largura="40rem"
                />
                <Corpo 
                
                    texto="Durante toda a campanha, foram utilizados anúncios patrocinados na região de Holambra, os quais, no  total, possibilitaram alcançar 48.000 pessoas durante 1 mês de campanha.
                    Não só isso, mas foi comemorado o aniversário em uma programação especial com música ao vivo, bolo de 10kg e decoração com painel de flores para os clientes registrarem o momento. "
                />
                
            </Layout>
        </>
    )
}