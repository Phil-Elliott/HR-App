import React from "react";
import styles from "../../../../styles/layout/top-nav/left.module.scss";
import { FaAngleLeft } from "react-icons/fa";

const Left = ({
  toggleNav,
  navWidth,
}: {
  toggleNav: any;
  navWidth: string;
}) => {
  return (
    <div className={styles.left} onClick={() => toggleNav()}>
      {navWidth === "wide" ? (
        <FaAngleLeft className={styles["arrow-left"]} />
      ) : (
        <FaAngleLeft className={styles["arrow-right"]} />
      )}
    </div>
  );
};

export default Left;
