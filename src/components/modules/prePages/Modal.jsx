import React, { useState } from "react";
import styles from "../../styles/Modal.module.css";

export default function Modal(props) {
  const [description, setDescription] = useState(
    props.element["description"] || ""
  );
  const [priority, setPriority] = useState(props.element["priority"] || "low");
  const [title, setTitle] = useState(props.title || "");
  function descChanger(event) {
    setDescription(event.target.value);
  }
  function titleChanger(event) {
    setTitle(event.target.value);
  }
  function saver() {
    props.element["title"] = title;
    props.element["description"] = description;
    props.element["priority"] = priority;
    props.closer();
    props.render();
  }
  return (
    <>
      <div className={styles.modalBack} onClick={props.closer} />
      <div className={styles.modalCenter}>
        <div className={styles.modalContent}>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>
            Title : <input type="text" value={title} onChange={titleChanger} />
          </p>
          <p>
            Description :
            <input type="text" value={description} onChange={descChanger} />
          </p>
          <p>
            Priority :
            <select
              name="subject"
              value={priority}
              onChange={(event) => {
                setPriority(event.target.value);
              }}
            >
              <option value="low">LOW</option>
              <option value="medium">MEDIUM</option>
              <option value="high">HIGH</option>
            </select>
          </p>
          <button onClick={saver}>Save</button>
        </div>
      </div>
    </>
  );
}
