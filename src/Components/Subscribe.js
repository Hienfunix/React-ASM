import React from "react";
import styles from "./Subscribe.module.css";

function Subscribe(){
    return( //Tạo ô theo dõi thông qua việc gởi email
        <div className={styles['middle']}>
            <h1>Save time, save money</h1>
            <p> Sign up and we'll send the best deals you</p>
            <form className={styles['subscribeInput']}>
                <label htmlFor='emailInput'/> 
                <input
                    type='email'
                    id='emailInput'
                    placeholder='   Your Email'
                    className={styles['emailInput']}
                ></input>
                <button className={styles['bt']}>Subscribe</button>
            </form>
        </div>
    )
}
export default Subscribe;