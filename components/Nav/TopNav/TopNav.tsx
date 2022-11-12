import React from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import styles from "../../../styles/layout/top-nav/topNav.module.scss";

const TopNav = ({
  toggleNav,
  navWidth,
}: {
  toggleNav: any;
  navWidth: string;
}) => {
  return (
    <div className={styles.main}>
      <Left toggleNav={toggleNav} navWidth={navWidth} />
      <Right />
    </div>
  );
};

export default TopNav;
