import React , {useState} from "react";
import data from "../data/info.json";
import styles from "../styles/WorkContent.module.css";
import WorkContentElement from "./WorkContentElement";

function WorkContent(props) {
  const [TEMPLATE , setTEMPLATE]=useState(data["TicTacToe"])
  console.log(TEMPLATE)
  return (
    <div className={styles.workPlace}>
      <section className={styles.section}>
        {Object.keys(TEMPLATE).map((element) => {
          return (
            <WorkContentElement
              data={TEMPLATE[element]}
              type={element}
              key={Math.random()}
            />
          );
        })}
        <button
          className={styles.addListButton}
          onClick={() => {
            const newTitle = prompt("Type list name", "Production");
            TEMPLATE[newTitle] = []
            setTEMPLATE({...TEMPLATE })
          }}
        >
          + Add another list
        </button>
      </section>
    </div>
  );
}

export default WorkContent;
