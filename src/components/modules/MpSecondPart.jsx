import React from "react"
import board from "../data/images/board.png"
import {SECOND_PAGE_TITLE ,SECOND_PAGE_DESCRIPTION }from '../data/data'
import style from '../styles/SecondPart.module.css'

function MpSecondPart(){
    return (
        <section className={style.secondPart} >
            <h1 className={style.title}>{SECOND_PAGE_TITLE}</h1>
            <p className={style.description} >{SECOND_PAGE_DESCRIPTION}</p>
            <img className={style.board} src={board} alt="Board" />
        </section>
    )
}
export default MpSecondPart