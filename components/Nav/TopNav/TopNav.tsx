import React from "react";
import styles from "../../../styles/layout/top-nav/topNav.module.scss";
import {
  FaUser,
  FaSearch,
  FaBell,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";

const TopNav = ({
  toggleNav,
  navWidth,
}: {
  toggleNav: any;
  navWidth: string;
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.left} onClick={() => toggleNav()}>
        {navWidth === "15rem" ? (
          <FaAngleLeft className={styles["arrow-left"]} />
        ) : (
          <FaAngleLeft className={styles["arrow-right"]} />
        )}
      </div>
      <div className={styles.right}>
        <FaSearch className={styles.icon} />
        <FaBell className={styles.icon} />
        <FaUser className={styles.icon} />
      </div>
    </div>
  );
};

export default TopNav;

/*

1) button to expand and collapse the nav
2) search icon, reminder icon, and user icon


*/
