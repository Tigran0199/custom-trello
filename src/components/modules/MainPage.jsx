import  React from 'react';
import styles from '../styles/MainPage.module.css'
import TitlePart from "./MpFirstPart";
import SecondPart from "./MpSecondPart";
import Header from "./Header";

function MainPage() {
    return (
        <>
            <Header  />
            <section className={styles.sectionOne}>
                <TitlePart />
            </section>
            <SecondPart />
        </>
  );
}
export default MainPage;