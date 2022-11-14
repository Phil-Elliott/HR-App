import React, { useState } from "react";
import { Meta } from "../meta";
import { NormalLayout, ResponsiveLayout } from "./components";
import styles from "../../styles/layout/layout.module.scss";

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
      <ResponsiveLayout
        children={children}
        display={display}
        navWidth={navWidth}
        toggleNav={toggleNav}
        toggleDisplay={toggleDisplay}
      />
      <NormalLayout
        children={children}
        display={display}
        navWidth={navWidth}
        toggleNav={toggleNav}
        toggleDisplay={toggleDisplay}
      />
    </div>
  );
};

export default Layout;
