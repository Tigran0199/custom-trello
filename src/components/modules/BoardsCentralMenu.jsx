import styles from '../styles/BoardsCentralMenu.module.css';
import React from 'react';

function BoardsCentralMenu(){
    return (
        <section className={styles.centralBoard}>
        <h2>Your workplaces</h2>
            <div className={styles.itemCard} onClick={()=>{
                alert('This is a board')
            }}>
                <h1>Name</h1>
            </div>
        </section>
    )
}
export default BoardsCentralMenu;