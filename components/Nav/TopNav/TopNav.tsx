import React from "react";
import styles from "../../../styles/layout/top-nav/topNav.module.scss";
import { FaUser, FaSearch, FaBell, FaAngleRight } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <FaAngleRight />
      </div>
      <div className={styles.right}>
        <FaSearch />
        <FaBell />
        <FaUser />
      </div>
    </div>
  );
};

export default TopNav;

/*

1) button to expand and collapse the nav
2) search icon, reminder icon, and user icon


*/
