import React from "react";
import styles from "./Header.module.css";
import InputSearch from "./InputSearch";


function Header (props) {
	const replaceLocation = (event) => {
		event.preventDefault(); 
		 window.location.replace('Search')
		// Hàm chuyển đến url Search 
	}
    return(
		<div className={styles["header"]}>
			<h1> A lifetime of discounts? It's Genius.</h1>
			<p> Get rewarded for your travels - unlock instant savings of 10% or more with a free account</p>
			<button className={styles["signIn"]}>Sign in/ Register</button>
			<form className={styles['searchForm']}>
				<InputSearch placeHolder = '      &#xf236;  Where are you going              &#xF073; 06/24/2022 to 06/24/2022             &#xf182; 1 adult - 0 children - 1 room"'/>
				<button className={styles['bt']} onClick={replaceLocation}> Search </button>  {/* search để tiến */}
			</form>
		</div>
    )
}
export default Header;