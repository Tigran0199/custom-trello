import React , {useState,useEffect} from 'react';
import styles from '../../styles/LoginPage.module.css'
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate("")
    const [email , setEmail] = useState("")
    const [pass , setPass] = useState("")
    const [users , setUsers] = useState({})
    const passChanger= (event)=>{
        setPass(event.target.value)
    }
    const mailChanger= (event)=>{
        setEmail(event.target.value)
    }
    function userLogin(){
        if(!email && !pass){
            alert("Invalid Input")
        }
        if(users[email]&& users[email]["pass"]===pass){
          localStorage.setItem("isLoggedIn" , true)
          navigate("/boards")
        }
    }

    useEffect(() => {
        fetch("https://620367724d21c200170b9ccd.mockapi.io/countries")
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
               setUsers(data[0])
            })

    }, []);
  return (
    <section className={styles.loginSection}>
     <div className={styles.firstIllustration}>
         <button className={styles.back} onClick={()=>{
           window.history.back();
         }}
         />
     </div>
     <div className={styles.loginBlock}>
       <h1>Login to Trello</h1>
         <input value={email} onChange={mailChanger} className={styles.inputs} type="email" placeholder="E-mail" />
         <input value={pass}  onChange={passChanger} className={styles.inputs} type="password" placeholder="Password"/>
         <button className={styles.button17} onClick={()=>{
             userLogin()
         }}>Login</button>
     </div>
     <div className={styles.secondIllustration}/>
    </section>
  );
}
export default Login;