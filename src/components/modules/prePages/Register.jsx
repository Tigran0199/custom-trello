import React, {useState , useEffect} from 'react';
import styles from '../../styles/LoginPage.module.css'
import {useNavigate} from "react-router-dom";
import {ValidateEmail , ValidatePassword} from '../../data/validator'



function Register() {
    const [input , setInput] = useState(localStorage.getItem("inputMail") || "")
    const [passInput , setPassInput] = useState("")
    const [alerts , setAlerts] = useState("")
    const [greenAlerts , setGreenAlerts] = useState("")
    const [passPlace , setPassPlace] = useState(false)
    const navigate = useNavigate("")
    const changer = function(event){
        setInput(event.target.value)
        if(ValidateEmail(event.target.value)){
            setPassPlace(true)
        }
    }
    useEffect(() => {
            if (ValidateEmail(input)){
                setPassPlace(true)
            }
    });

    return (
        <section className={styles.loginSection}>
            <div className={styles.firstIllustration}>
                <button className={styles.back} onClick={() => {
                    window.history.back();
                }}/>
            </div>
            <div className={styles.loginBlock}>
                <h1>Welcome to Trello</h1>
                <input value={input} onChange={changer} className={styles.inputs} type="text" placeholder="E-mail" />
                {passPlace && <input value={passInput} onChange={(event)=>{
                    setPassInput(event.target.value)
                }} className={styles.inputs} type="password" placeholder="Password" />}
                <div className={styles.alerts}>{alerts}</div>
                <div className={styles.alertsGreen}>{greenAlerts}</div>
                <button onClick={()=>{
                    if(!ValidateEmail(input)){
                        setAlerts("Invalid E-mail address, please check your input")
                    }
                    if(!ValidatePassword(passInput)){
                        setAlerts(alerts + " \nInvalid password , please make it stronger")
                    }
                    if((ValidatePassword(passInput)&&ValidateEmail(input))){
                            setAlerts("")
                            setGreenAlerts("Well , redirecting...")
                            setTimeout(()=>{
                                navigate("/boards")
                            } , 700)
                            localStorage.setItem("isLoggedIn" , true)
                    }
                }} className={styles.button17}>Register</button>
                <p>Password should have</p>
                <ul>
                    <li>UpperCase letter</li>
                    <li>LowerCase letter</li>
                    <li>Number</li>
                    <li>Special Symbol</li>
                </ul>
            </div>
            <div className={styles.secondIllustration}/>
        </section>
    );
}
export default Register;