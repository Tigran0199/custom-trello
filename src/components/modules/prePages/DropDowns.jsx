import React from 'react';
import styles from '../../styles/WorkHeader.module.css'
import {Dropdown, DropdownButton} from "react-bootstrap";

function DropDowns(props) {
    return (
        <div className={styles.dropDowns}>
            <DropdownButton id="dropdown-item-button" title="Workplace">
                <Dropdown.ItemText>Current workplace</Dropdown.ItemText>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" title="Recent">
                <Dropdown.Item as="button">Another action</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" title="Templates">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item onClick={()=>{
                    alert("clicked")
                }} as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default DropDowns;