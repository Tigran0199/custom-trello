import  React from 'react';
import { HEADER_LOGO} from "../data/data";
import styles from '../styles/Header.module.css';
import {useNavigate} from "react-router-dom";

function Header() {
    const navigation = useNavigate()
  return (
    <header className={styles.header}>
        <img className={styles.logo} src={HEADER_LOGO} alt="Header Logo" />
        <div className={styles.buttonDiv}>
            <button className={styles.button17} onClick={()=>{
                navigation("/login")
            }}>Login</button>
            <button className={styles.register} onClick={()=>{
                navigation("/register")
            }}>Register </button>
        </div>
    </header>
  );
}
export default Header;