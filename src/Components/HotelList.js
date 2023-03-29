import React from "react";
import styles from "./HotelList.module.css"
import hotelList from "../data/hotel_list.json"

function HotelList(props){
    return(
        <div className={styles['hotelList']}>
            <h1>Homes guests love</h1>
            <div className={styles['hotelListDetail']}>
                {hotelList.map(listDetail => { //Trích xuất danh sách Khách sạn gồm hình ảnh, tên khách sạn, thành phố, giá, bầu chọn và đánh giá
                    return(
                        <div>
                            <img src={`${listDetail.image_url}`} alt="HotelList"></img>
                            <a href="/detail">{`${listDetail.name}`}</a>
                            <p>{`${listDetail.city}`} </p>
                            <p className={styles['price']}>Starting from ${`${listDetail.price}`} </p>
                            <div><span className={styles['rate']}>{`${listDetail.rate}`}</span> {`${listDetail.type}`}  </div> 
                        </div>
                    )
                })}
            </div>        
        </div>
    )
}

export default HotelList;