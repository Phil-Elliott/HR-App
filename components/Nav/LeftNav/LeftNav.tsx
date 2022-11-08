import React from "react";
import Links from "./Links";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "../../../styles/layout/left-nav/leftNav.module.scss";

const LeftNav = () => {
  return (
    <div className={styles.main}>
      <div className={styles.links}>
        <Links />
      </div>
      <div className={styles["expand-bttn"]}>
        <FaAngleDoubleRight />
      </div>
    </div>
  );
};

export default LeftNav;

/*
  div container 
    1) logo
    2) nav links
    3) account
    4) expand button


*/
