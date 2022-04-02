import React, { useState } from "react";
import Modal from "./prePages/Modal";
import styles from "../styles/WorkContent.module.css";

export default function WCSuchElem({ makeRender, title, users, element }) {
  const [isShowing, setIsShowing] = useState(false);
  function modalShower() {
    setIsShowing(!isShowing);
  }
  return (
    <>
      {isShowing ? (
        <Modal
          render={makeRender}
          closer={modalShower}
          title={title}
          element={element}
        />
      ) : null}
      <div className={styles.mainContent} onClick={modalShower}>
        <div className={styles.mainContentTop}>
          <h6>{title}</h6>
        </div>
        <p>{(element["description"] + "․․․" || "...").slice(0, 10)}</p>
        <div className={styles.mainContentBottom}>
          {/* Ստեղ պետքա յուզերների նկարները լիներ , բայց ես շատ ալարկոտն եմ 😥 */}
          {/* {users
            ? users.split(",").map((element) => {
                return (
                  <img
                    key={Math.random()}
                    className={styles.mainContentBottomImg}
                    src=""
                    alt={element.toString()}
                  />
                );
              })
            : null} */}
        </div>
      </div>
    </>
  );
}
