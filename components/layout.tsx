import React, { useState } from "react";
import { Meta } from "./meta";
import LeftNav from "./Nav/LeftNav/LeftNav";
import TopNav from "./Nav/TopNav/TopNav";
import styles from "../styles/layout/layout.module.scss";

const Layout = ({ children }: { children: any }) => {
  const [navWidth, setNavWidth] = useState("responsive");
  const [display, setDisplay] = useState("none");

  const toggleNav = () => {
    if (navWidth === "wide") {
      setNavWidth("narrow");
    } else {
      setNavWidth("wide");
    }
  };

  const toggleDisplay = () => {
    if (display === "none") {
      setDisplay("responsive");
    } else {
      setDisplay("none");
    }
  };

  return (
    <div className={styles.main}>
      <Meta />
      {display !== "none" && (
        <LeftNav navWidth={navWidth} toggleDisplay={toggleDisplay} />
      )}
      <div
        className={styles["right-container"]}
        style={{
          width:
            navWidth === "responsive" && display !== "none" ? "0vw" : "100vw",
        }}
      >
        <TopNav
          toggleNav={toggleNav}
          navWidth={navWidth}
          toggleDisplay={toggleDisplay}
        />
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
