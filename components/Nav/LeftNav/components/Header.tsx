import React from "react";
import { FaWpforms } from "react-icons/fa";
import styles from "../../../../styles/layout/left-nav/header.module.scss";

const Header = ({ navWidth }: { navWidth: string }) => {
  return (
    <div
      className={styles.header}
      style={{
        justifyContent: navWidth !== "wide" ? "center" : "inherit",
      }}
    >
      <div className={styles.logo}>
        <FaWpforms />
      </div>
      {navWidth === "wide" && (
        <div className={styles.title}>
          <h1>HRMS</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
