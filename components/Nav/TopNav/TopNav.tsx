import React from "react";
import { Left, Right, ResponsiveLeft } from "./components";
import styles from "../../../styles/layout/top-nav/topNav.module.scss";

interface NavProps {
  toggleNav: any;
  navWidth: string;
  toggleDisplay: any;
}

const TopNav = ({ toggleNav, navWidth, toggleDisplay }: NavProps) => {
  return (
    <div className={styles.main}>
      <Left toggleNav={toggleNav} navWidth={navWidth} />
      <ResponsiveLeft toggleDisplay={toggleDisplay} />
      <Right />
    </div>
  );
};

export default TopNav;
