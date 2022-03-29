import React from 'react';
import styles from '../../styles/LoginPage.module.css'
import {useNavigate} from "react-router-dom";

function Login() {
    const navigation = useNavigate();
  return (
    <section className={styles.loginSection}>
     <div className={styles.firstIllustration}>
         <button className={styles.back} onClick={()=>{
           window.history.back();
         }}
         ></button>
     </div>
     <div className={styles.loginBlock}>
       <h1>Login to Trello</h1>
         <input className={styles.inputs} type="email" placeholder="E-mail" />
         <input className={styles.inputs} type="password" placeholder="Password"/>
         <button className={styles.button17} onClick={()=>{
            navigation('/boards');
         }}>Login</button>
     </div>
     <div className={styles.secondIllustration}></div>
    </section>
  );
}
export default Login;