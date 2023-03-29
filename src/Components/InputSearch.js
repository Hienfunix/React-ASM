import React from "react";
import styles from "./InputSearch.module.css";



function InputSearch(props){

    return(  // Tạo ô Tìm kiếm
        <div>
            <label htmlFor="search"></label>
            <input 
                id="search" 
                type="search" 
                className={styles['InSearch']} 
                placeholder={props.placeHolder} 
            /> 
        </div>
    )
}
export default InputSearch;