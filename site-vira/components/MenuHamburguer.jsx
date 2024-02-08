import { useState } from 'react';
import styles from '../styles/HamburguerMenu.module.scss'; // Assume the existence of CSS module

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
                <a href="/">inicio</a>
                <a href="/Sobre">sobre</a>
                <a href="/Portifolio">portifólio</a>
                <a href="/Contato">contato</a>
                <a href="/Blog">blog</a>
            </div>
        </div>
    );
}

export default HamburgerMenu;