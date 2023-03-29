import React from "react";
import styles from './NavBarItem.module.css';

function NavBarItem(props) {
    return(
        <div>
            <li className ={`${styles['menu']} ${props.isBorder && styles.border}`}>
            <i className={`fa ${props.icon} `}></i> {props.type} 
            </li>
        </div>
    )
}
export default NavBarItem;
