import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header className="transicao">
            <img src="./logo_vira.png" alt="logo do site" className="logo"/>
            <nav className="menu">
                <ul className="lista-menu">
                    <li className="item-menu"><a href="#">sobre</a></li>
                    <li className="item-menu"><a href="#">portifólio</a></li>
                    <li className="item-menu"><a href="#">blog</a></li>
                    <li className="item-menu"><a href="#">contato</a></li>
                </ul>
            </nav>
        </header>
        <Main />
        <NextScript />
        <footer>
            <p className="assinatura">&copy; 2023 Vinícius Costa</p>
            <ul className="contato">
                <li className="item-contato"><a href="#">Linkedin</a></li>
                <li className="item-contato"><a href="#">Github</a></li>
                <li className="item-contato"><a href="#">vinicius.costa.devf@gmail.com</a></li>
                <li className="item-contato"><a href="#">(11) 97526- 0411</a></li>
            </ul>
        </footer>
      </body>
    </Html>
  )
}
