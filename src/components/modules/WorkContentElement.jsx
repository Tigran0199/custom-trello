import React, { useState } from "react";
import SuchElement from "./WCSuchElem";
import styles from "../styles/WorkContent.module.css";

function WorkContentElement(props) {
  const [data, setData] = useState(props.data);
  const type = props.type;

  function changer({ status, title, description, users, priority = "low" }) {
    setData([
      ...data,
      {
        status: status,
        title: title,
        description: description,
        users: users,
        priority: priority,
      },
    ]);
  }
  function makeRender() {
    setData([...data]);
  }
  return (
    <div className={styles.cardItem}>
      <h5>{type}</h5>
      {data.map((element) => {
        return (
          <SuchElement
            makeRender={makeRender}
            title={element["title"]}
            users={element["users"]}
            element={element}
            key={Math.random()}
          />
        );
      })}
      <button
        onClick={() => {
          changer({});
        }}
      >
        + Add Element
      </button>
    </div>
  );
}

export default WorkContentElement;
