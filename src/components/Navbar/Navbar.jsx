import React,{useState} from "react";

import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";


export const Navbar =() => {  
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
        
        <a className={styles.title} href="/">Enora</a> 
        <a className={styles.title2} >Endüstriyel Reklam Çözümleri</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
                menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)} 
            />
            <ul
              className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#abaut">Hakkımızda</a>
                </li>
                <li>
                    <a href="#experience">Referanslar</a>
                </li>
                <li>
                    <a href="#project">Projeler</a>
                </li>
                <li>
                    <a href="#contact">İletişim</a>
                </li>
            </ul>
        </div>
    </nav>
};