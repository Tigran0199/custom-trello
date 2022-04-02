import React, {useEffect, useState} from 'react';
import {Placeholder} from "react-bootstrap";
import WorkHeader from "./WorkHeader";
import WorkContent from "./WorkContent";
import styles from '../styles/WorkHeader.module.css'

function WorkBoard(props) {
    const [ loaded , setIsLoaded ] = useState(false)
   
    useEffect(()=>{
        setTimeout(()=>{setIsLoaded(true)},700)
    })
    
    return (
        <>
            <WorkHeader changer={setIsLoaded}/>
            <section className={styles.backColor}>
                {loaded ?
                    <WorkContent /> :
                    <>
                        <Placeholder xs={12} />
                        <Placeholder xs={12} bg="primary" />
                        <Placeholder xs={12} bg="secondary" />
                        <Placeholder xs={12} bg="success" />
                        <Placeholder xs={12} bg="danger" />
                        <Placeholder xs={12} bg="warning" />
                        <Placeholder xs={12} bg="info" />
                        <Placeholder xs={12} bg="light" />
                        <Placeholder xs={12} bg="dark" />
                        <Placeholder xs={12} />
                        <Placeholder xs={12} bg="primary" />
                        <Placeholder xs={12} bg="secondary" />
                        <Placeholder xs={12} bg="success" />
                        <Placeholder xs={12} bg="danger" />
                        <Placeholder xs={12} bg="warning" />
                        <Placeholder xs={12} bg="info" />
                        <Placeholder xs={12} bg="light" />
                        <Placeholder xs={12} bg="dark" />
                    </>}
            </section>
        </>
    );
}

export default WorkBoard;