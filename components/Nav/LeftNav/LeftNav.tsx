import React, { useState } from "react";
import { Header, Links, ExpandBttn } from "./components";
import styles from "../../../styles/layout/left-nav/leftNav.module.scss";

const LeftNav = () => {
  const [navWidth, setNavWidth] = useState("15rem");

  const toggleNav = () => {
    if (navWidth === "15rem") {
      setNavWidth("5rem");
    } else {
      setNavWidth("15rem");
    }
  };

  return (
    <div className={styles.main} style={{ width: navWidth }}>
      <div className={styles.top}>
        <Header navWidth={navWidth} />
        <Links navWidth={navWidth} />
      </div>
      <ExpandBttn toggleNav={toggleNav} />
    </div>
  );
};

export default LeftNav;

/*



*/
