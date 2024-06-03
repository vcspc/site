import Layout from '../components/Layout';
import Apresentacao from '../components/Apresentacao';
import useScreenWidth from '../components/UseScreenWidth';
import GaleriaVideo from '../components/GaleriaVideo';


export default function Amistel() {

    const screenWidth = useScreenWidth();
    const sentidoEsquerdo = screenWidth > 412 ? 'esquerda' : 'direita';
    const sentidoDireito = screenWidth > 412 ? 'direita' : 'direita';
    const sentidoLista = screenWidth > 412 ? 'lista' : 'listaDireita';


    return (
        <>
            <Layout>
                <Apresentacao 
                    src="./maes.svg" 
                    alt="Ilustração de uma mãe segurando um bebe no colo"
                    titulo="Dia das Mães"
                    subtitulo="Campanha de Dia das Mães"
                    descricao="Com o objetivo de aproximação com o público femenino, nesta campanha para a Martin Holandesa, foi criado um vídeo com diferentes tipos de mães, no qual, foi levantado alguns questionamentos sobre a  tarefa de ser mãe hoje em dia."
                    sentido={sentidoDireito}
                />
                <GaleriaVideo 
                    videos={[
                        './video.mp4'
                    ]}
                    
                    slides={1}
                    
                    largura="30rem"
                />
                
            </Layout>
        </>
    )
}