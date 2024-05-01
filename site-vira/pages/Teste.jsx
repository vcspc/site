/* import styles from '../styles/Sobre.module.scss'; */

import Layout from '../components/Layout';
import MenuHamburguer from '../components/MenuHamburguer';
import Galeria from '../components/Galeria';

export default function Teste() {
    return (
        <>
            <Layout>
                <Galeria 
                imagens={[
                    './victor_costa_completo.png',
                    './vinicius_costa.png',
                    './victor_costa.png'
                ]}
                largura="20rem"
                />
                
            </Layout>
        </>
    )
}