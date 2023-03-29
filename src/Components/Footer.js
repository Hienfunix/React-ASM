import React from "react";
import styles from "./Footer.module.css";
import footer from '../data/footer.json';

function Footer(props){
    return(
        <div>
            <ul className={styles['footer']}>
                {footer.map(footerList => { //trích xuất danh sách mục lục cần xem
                    return(
                        <div>
                            {footerList.col_values.map(abc => {
                                return(
                                    <li> {abc} </li>
                            )})}
                        </div>
                    )
                })}

            </ul>
        </div>
    )
}

export default Footer;