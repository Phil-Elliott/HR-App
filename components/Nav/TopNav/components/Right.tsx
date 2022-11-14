import React from "react";
import styles from "../../../../styles/layout/top-nav/right.module.scss";
import { FaSearch, FaRegBell, FaAngleDown } from "react-icons/fa";

const Right = () => {
  return (
    <div className={styles.right}>
      {/* <FaSearch className={styles.icon} />
      <FaRegBell className={styles.icon} /> */}
      <div className={styles.user}>
        <div className={styles["name-logo"]}>
          <p>J</p>
        </div>
        <p className={styles["user-name"]}>Jane Doe</p>
        <FaAngleDown className={styles.icon} />
      </div>
    </div>
  );
};

export default Right;
