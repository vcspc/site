import Layout from '../components/Layout';
import Apresentacao from '../components/Apresentacao';
import useScreenWidth from '../components/UseScreenWidth';


export default function Heinekein() {

    const screenWidth = useScreenWidth();
    const sentidoEsquerdo = screenWidth > 412 ? 'esquerda' : 'direita';
    const sentidoDireito = screenWidth > 412 ? 'direita' : 'direita';
    const sentidoLista = screenWidth > 412 ? 'lista' : 'listaDireita';


    return (
        <>
            <Layout>
                <Apresentacao 
                    src="./clube_de_vantagens2.png" 
                    alt="Print do site do clube de vantagens"
                    titulo="Clube de Vantagens"
                    subtitulo="Clube de Vantagens Martin"
                    descricao="Desenvolvemos um Clube de Vantagens para clientes do setor corporativo com benefícios exclusivos para atender suas necessidades.
                    Foi criado uma campanha de e-mail marketing, Whatsapp Business e ações de Trade Marketing no Almoço Executivo.
                    Em um prazo de 2 meses foram captados 39 clientes executivos."
                    sentido={sentidoDireito}
                />
                
            </Layout>
        </>
    )
}