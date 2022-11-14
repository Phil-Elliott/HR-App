import React, { useState, useEffect } from "react";
import { Meta } from "./meta";
import LeftNav from "./Nav/LeftNav/LeftNav";
import TopNav from "./Nav/TopNav/TopNav";
import styles from "../styles/layout/layout.module.scss";

const Layout = ({ children }: { children: any }) => {
  const [navWidth, setNavWidth] = useState("wide");
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
      <div className={styles["responsive-layout"]}>
        {display === "responsive" && (
          <LeftNav navWidth="responsive" toggleDisplay={toggleDisplay} />
        )}
        {display === "none" && (
          <div className={styles["right-container"]}>
            <TopNav
              toggleNav={toggleNav}
              navWidth="responsive"
              toggleDisplay={toggleDisplay}
            />
            <main>{children}</main>
          </div>
        )}
      </div>
      <div className={styles["normal-layout"]}>
        <LeftNav navWidth={navWidth} toggleDisplay={toggleDisplay} />
        <div className={styles["right-container"]}>
          <TopNav
            toggleNav={toggleNav}
            navWidth={navWidth}
            toggleDisplay={toggleDisplay}
          />
          <main>{children}</main>
        </div>
        )
      </div>
    </div>
  );
};

export default Layout;

/*
  find way to get screen width and set navWidth to responsive if screen width is less than 768px

  could change top part to a div and have display = none if screen width is less than 768px in css 

  could make a responsive layout and a normal layout below 


  sidenav 
  https://mui.com/material-ui/react-drawer/
  persistent drawer or mini variant drawer?


*/
