import React from "react";
import styles from './HotelType.module.css';
import types from '../data/type.json';

function HotelType(props){
    return(
        <div className={styles['hotelType']}>
            <h1> Browse by property type</h1>
            <div className={styles['hotelDetail']}>
                {types.map(typeDetail => { //trích xuất danh sách các loại khách sạn gồm hình ảnh, tên và số lượng khách sạn
                    return(
                        <div>
                            <img src={`${typeDetail.image}`} alt="HotelType"></img>
                            <h1>{`${typeDetail.name}`}</h1>
                            <p>{`${typeDetail.count}`} hotels</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HotelType;