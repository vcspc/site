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
                    src="./amstel_logo.svg" 
                    alt="Logo da empresa Amistel"
                    titulo="Snack Bar De Dam"
                    subtitulo="Lançamento do De Dam Snack Bar"
                    descricao="Desenvolvemos o planejamento de uma campanha de lançamento do primeiro Snack Bar de Holambra com o mesmo conceito dos snack bars de Amsterdam. Para o lançamento convidamos 20 influenciadores da região para um jantar de pré-lançamento do bar. 
                    O convite foi enviado em uma caixa com presentes exclusivos com a temática holandesa do De Dam.
                    Foi sorteado também um press kit (o mesmo dos influencers) e um convite do pré-lançamento para os seguidores dos influencers parceiros.
                    Foram mais de 600 stories e postagens feitos pelos influencers e um alcance de mais de 70.000 pessoas em Holambra e região. "
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