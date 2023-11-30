import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        {/* <header>
            <div className="container">
              <img src="./logo_vira.svg" alt="logo do site" className="logo"/>
              <nav className="menu">
                  <ul className="lista_menu">
                      <li className="item_menu"><a href="#">sobre</a></li>
                      <li className="item_menu"><a href="#">portifólio</a></li>
                      <li className="item_menu"><a href="#">blog</a></li>
                      <li className="item_menu"><a href="#">contato</a></li>
                  </ul>
              </nav>
            </div>  
        </header> */}
        <Main />
        <NextScript />
        {/* <footer>
            <div className='container'>
              <p className="assinatura">&copy; 2023 Vinícius Costa</p>
              <ul className="contato">
                  <li className="item_contato"><a href="#">Linkedin</a></li>
                  <li className="item_contato"><a href="#">Github</a></li>
                  <li className="item_contato"><a href="#">vinicius.costa.devf@gmail.com</a></li>
                  <li className="item_contato"><a href="#">(11) 97526- 0411</a></li>
              </ul>
            </div>
        </footer> */}
      </body>
    </Html>
  )
}
