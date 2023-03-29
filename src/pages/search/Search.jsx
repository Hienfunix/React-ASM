import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SearchPopup from "../../Components/SearchPopup";
import SearchList from "../../Components/SearchList";
import styles from './Search.module.css';

const Search = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["search"]}>
        <div className={styles['searchPopup']}>
          <SearchPopup />
        </div>
        <div className={styles['searchList']}>
          <SearchList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
