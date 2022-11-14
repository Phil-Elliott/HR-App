import React from "react";
import { FaWpforms } from "react-icons/fa";
import styles from "../../styles/shared/logo.module.scss";

const Header = ({
  navWidth,
  display,
}: {
  navWidth: string;
  display: string;
}) => {
  return (
    <div
      className={
        display === "responsive"
          ? `${styles.header} ${styles["header-responsive"]}`
          : styles["header"]
      }
      style={{
        justifyContent: navWidth === "narrow" ? "center" : "inherit",
      }}
    >
      <div className={styles.logo}>
        <FaWpforms />
      </div>
      {navWidth !== "narrow" && (
        <div className={styles.title}>
          <h1>HRMS</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
