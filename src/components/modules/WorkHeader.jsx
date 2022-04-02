import React from 'react';
import styles from '../styles/WorkHeader.module.css'
import Logo from "../data/images/trello-brands.svg"
import DropDowns from "./prePages/DropDowns";

function WorkHeader() {
    return (
        <header className={styles.header}>
            <div className="flex">
                <img className={styles.headerLogo} src={Logo} alt="Reload page :)"/>
                <h1>Trello</h1>
                <DropDowns  />
            </div>
            <div className={styles.rightSide}>
                <input type="search"/>
                <button className={styles.infoButton} />
                <button className={styles.notification} />
                <img className={styles.user} src={Logo} alt="user" />
            </div>
        </header>
    );
}

export default WorkHeader;