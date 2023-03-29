import React from "react";
import Navbar from "../../Components/Navbar";
import styles from "./Home.module.css";
import Header from "../../Components/Header";
import City from "../../Components/City";
import HotelType from "../../Components/HotelType";
import HotelList from "../../Components/HotelList";
import Subscribe from "../../Components/Subscribe";
import Footer from "../../Components/Footer";

const Home = () => {
	return (
		<div>
			<div className={styles['allHeader']}>
				<Navbar />
				<Header />
			</div>
			<div className={styles['middle']}>
				<City />
				<HotelType />
				<HotelList />
			</div>
			<div className={styles['middle2']}>
				<Subscribe />
			</div>
			<div className={styles['footer']}>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
