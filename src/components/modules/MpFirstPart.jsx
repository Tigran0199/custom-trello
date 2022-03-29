import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../styles/MainPage.module.css'
import {TITLE_NAME , TITLE_DESCRIPTION , MAIN_PAGE_IMG} from "../data/data";

export default function  TitlePart(){
    const navigation = useNavigate()
    const [input , setInput] =useState("");
    return (
        <>
            <div className={styles.info}>
                <h1>{TITLE_NAME}</h1>
                <p>{TITLE_DESCRIPTION}</p>
                <div>
                    <input value={input} onChange={(event)=>{
                        setInput(event.target.value)
                    }} type="email" placeholder="E-mail" className={styles.input}  />
                    <button onClick={()=>{
                        localStorage.setItem("inputMail" , input)
                        navigation('/register')
                    }} className={styles.signUn}>Sign Up It's Free</button>
                </div>
            </div>
        <img className={styles.mainPageImage} src={MAIN_PAGE_IMG} alt='commutication' />
        </>
            )
}