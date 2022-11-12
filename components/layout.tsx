import React, { useState } from "react";
import { Meta } from "./meta";
import LeftNav from "./Nav/LeftNav/LeftNav";
import TopNav from "./Nav/TopNav/TopNav";
import styles from "../styles/layout/layout.module.scss";

const Layout = ({ children }: { children: any }) => {
  const [navWidth, setNavWidth] = useState("wide");

  const toggleNav = () => {
    if (navWidth === "wide") {
      setNavWidth("narrow");
    } else {
      setNavWidth("wide");
    }
  };

  return (
    <div className={styles.main}>
      <Meta />
      <LeftNav navWidth={navWidth} />
      <div className={styles["right-container"]}>
        <TopNav toggleNav={toggleNav} navWidth={navWidth} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

/*
  sidenav 
  https://mui.com/material-ui/react-drawer/
  persistent drawer or mini variant drawer?


*/
