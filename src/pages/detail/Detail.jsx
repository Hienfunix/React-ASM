import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import styles from './Detail.module.css';
import detail from "../../data/detail.json";

const Detail = () => {
  return (
    <div>
      <Navbar />
        <div className={styles['allMid']}>
          <div className={styles['part1']}>
            <div className={styles['leftPart']}>
              <h1> {detail.name}</h1>
              <div className={styles['address']}>&#xf041; {detail.address}</div>
              <div className={styles['distance']}>{detail.distance}</div>
              <div className={styles['price']}>{detail.price}</div>
            </div>
            <div className={styles['rightPart']}>
              <button className={styles['bt']}>Reserve or Book Now!</button>
            </div>
          </div>

          <div className={styles['part2']}>
            {detail.photos.map(photo => {
              return(
                  <img src={`${photo}`} alt='apartment'></img>
              )
            })}
          </div>
          <div className={styles['part3']}>
            <div className={styles['leftPart']}>
              <h2>{detail.title}</h2>
              <div>{detail.description}</div>
              
            </div>
            <div className={styles['rightPart']}>
                <h3> Perfect for a 9-night stay!</h3>
                <p>Located in the real heart of Krakow, this property has an excellent location score of 9.8</p>
                <div className={styles['line_3']}><div className={styles['nine_night_price']}>${detail.nine_night_price}</div> (9 nights)</div>
                <button className={styles['bt']}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Detail;
