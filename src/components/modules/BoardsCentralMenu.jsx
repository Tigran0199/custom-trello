import styles from '../styles/BoardsCentralMenu.module.css';
import React from 'react';
import {useNavigate} from "react-router-dom";

function BoardsCentralMenu({title}){
    const navigate = useNavigate("")
    return (
        <section className={styles.centralBoard}>
        <h2>Your workplaces</h2>
            <div className={styles.itemCard} onClick={()=>{
                navigate('/myBoard')
            }}>
                <h1>{title}</h1>
            </div>
        </section>
    )
}
export default BoardsCentralMenu;