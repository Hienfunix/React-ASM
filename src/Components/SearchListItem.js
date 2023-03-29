import React from "react";
import styles from "./SearchListItem.module.css";

function SearchListItem (props) {
    const isFree_cancel = props.free_cancel; 
    return(
        <div>
            <div className={styles['searchList']}>
                        <img src={`${props.imgSrc}`}alt='list'></img>
                        <div className={styles['column_2']}>
                            <h1>{props.name}</h1>
                            <div>{props.distance} from center</div>
                            <div className={styles['tag']}>{props.tag}</div>
                            <div className={styles['description']}>{props.description}</div>
                            <div className={styles['type']}>{props.type}</div>
                            {isFree_cancel && <div className={styles['freeCancel']}> Free cancellation</div>}
                            {isFree_cancel && <div className={styles['freeCancel2']}> You can cancel later, so lock is this great price today</div>}
                            {!isFree_cancel && <div className={styles['freeCancel']}> </div>}
                        </div>
                        <div className={styles['column_3']}>
                            <div className={styles['line_1']}>
                                <div className={styles['rate_text']}>{props.rate_text}</div>
                                <div className={styles['rate']}>{props.rate}</div>
                            </div>
                            <div className={styles['line_2']}>
                                <div className={styles['price']}>${props.price}</div>
                                <div className={styles['tax']}> Includes taxes and fees </div>
                                <button className={styles['bt']}>See availability</button>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default SearchListItem;