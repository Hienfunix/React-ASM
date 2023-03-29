import React from "react";
import navBar from "../data/navBar.json";
import styles from "./Navbar.module.css";
import NavBarItem from "./NavBarItem";

function Navbar(props) {

    return(
        <div className = {styles["header"]}>
            <p className ={styles['title']}>  Booking Website </p>
            <div className={styles['bt']}> 
                <button className ={styles['register']}> Register </button>
                <button className ={styles['login']}> Login </button>
            </div>
            <div className={styles["emty"]}></div>
            <div className={styles["menus"]}>
            {
            navBar.map(menu => {
                return ( //Tạo các thông tin menu đầu trang 
                <NavBarItem  icon={menu.icon}  type={menu.type} isBorder={menu.active} />
                )
                })
            }
            </div>

        </div>
    )
}
export default Navbar;