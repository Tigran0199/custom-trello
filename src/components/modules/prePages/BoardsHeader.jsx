import React from "react";
import styles from '../../styles/BoardsHeader.module.css'
import { DropdownButton ,Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function BoardsHeader() {
  return (
    <header className={styles.header}>
      <h1>Boards</h1>
        <DropdownButton id="dropdown-item-button" title="Workplace">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item onClick={()=>{
                alert("clicked")
            }} as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
        <button> + Create</button>
    </header>
  );
}
export default BoardsHeader;