import { useState } from 'react';
import styles from '../styles/HamburguerMenu.module.scss';
import Link from 'next/link';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.hamburgerMenu}>
            <button className={styles.hamburgerButon} onClick={toggleMenu}>
                
                <span className={isOpen ? styles.iconOpen : styles.icon}></span>
                <span className={isOpen ? styles.iconOpen : styles.icon}></span>
                <span className={isOpen ? styles.iconOpen : styles.icon}></span>
            </button>
            <div className={isOpen ? styles.menuOpen : styles.menu}>
                {/* Place your menu items here */}
                <Link href="/">inicio</Link>
                <Link href="/Sobre">sobre</Link>
                <Link href="/Portifolio">portifólio</Link>
                <Link href="/Contato">contato</Link>
                <a href="/Blog">blog</a>
            </div>
        </div>
    );
}

export default HamburgerMenu;