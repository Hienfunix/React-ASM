import React from "react";
import styles from "./SearchPopup.module.css"

function SearchPopup() {
    return(
        <div>
            <h1>Search</h1>
            <form className={styles['searchForm']}>
                <div className={styles['destination']}>
                    <label htmlFor="destination">Destination</label>
                    <input type='text'id='destination'></input>
                </div>
                
                <div className={styles['checkInDate']}>
                    <label htmlFor="checkInDate"> Check-in Date</label>
                    <input type='date' id='checkInDate' ></input>
                </div>
                <div className={styles['option']}> 
                    <p>Options</p>
                
                    <div className={styles['minPrice']}>
                        <label htmlFor="minPrice">Min price per night</label>
                        <input type='number'id='minPrice' ></input>
                    </div>
                    <div className={styles['maxPrice']}>
                        <label htmlFor="maxPrice">Max price per night</label>
                        <input type='number'id='maxPrice' ></input>
                    </div>
                    <div className={styles['adult']}>
                        <label htmlFor="adult">Adult</label>
                        <input type='number'id='adult' placeholder="1" ></input>
                    </div>
                    <div className={styles['children']}>
                        <label htmlFor="children">Children</label>
                        <input type='number'id='children' placeholder="0" ></input>
                    </div>
                    <div className={styles['room']}>
                        <label htmlFor="room">Room</label>
                        <input type='number'id='room' ></input>
                    </div>
                </div>
                <button className={styles['bt']}> Search </button>
            </form>
        </div>
    )
}

export default SearchPopup;
