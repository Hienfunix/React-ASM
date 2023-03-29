import React from "react";
import styles from './City.module.css';
import city from '../data/city.json';
function City(props){
    return(
        <div className={styles['city']}> 
            {city.map(cityDetail =>{ // Trích xuất danh sách thành phố như Hình Ảnh, tên và Subtext của thành phố
                return(
                    <div>
                        <img src={`${cityDetail.image}`} alt='city'></img>
                        <span className={styles['cityName']}>{cityDetail.name}</span> 
                        <span className={styles['citySubtext']}>{cityDetail.subText}</span> 
                    </div>
                )
            }
            )}

        </div>
    )
}
export default City;
