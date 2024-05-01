/* import styles from '../styles/Sobre.module.scss'; */

import Layout from '../components/Layout';
import MenuHamburguer from '../components/MenuHamburguer';
import Galeria from '../components/Galeria';
import Corpo from '../components/Corpo';

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
                <Corpo
                    titulo="Victor Costa"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </Layout>
        </>
    )
}