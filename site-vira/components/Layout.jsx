import Link from 'next/link';
import MenuHamburguer from '../components/MenuHamburguer';

function Layout({ children }) {
  return (
    <div className='body'>
      <header>
        <div className="container">
          <Link href="/"> <img src="./logo_vira.svg" alt="logo do site" className="logo"/> </Link>
          <nav className="menu">
            <ul className="lista_menu">
              <li className="item_menu">
                <Link href="/Sobre">{/* <a> */}sobre{/* </a> */}</Link>
              </li>
              <li className="item_menu">
                <Link href="/Portifolio">{/* <a> */}portifólio{/* </a> */}</Link>
              </li>
              <li className="item_menu">
                <Link href="/Blog">{/* <a> */}blog{/* </a> */}</Link>
              </li>
              <li className="item_menu">
                <Link href="/Contato">{/* <a> */}contato{/* </a> */}</Link>
              </li>
            </ul>
          </nav>
          <MenuHamburguer />
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className='container'>
          <p className="assinatura">&copy; 2023 Vinícius Costa</p>
          <ul className="contato">
            <li className="item_contato"><a href="#">Linkedin</a></li>
            <li className="item_contato"><a href="#">Github</a></li>
            <li className="item_contato">
              <a href="mailto:vinicius.costa.devf@gmail.com">vinicius.costa.devf@gmail.com</a>
            </li>
            <li className="item_contato"><a href="tel:+5511975260411">(11) 97526- 0411</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
