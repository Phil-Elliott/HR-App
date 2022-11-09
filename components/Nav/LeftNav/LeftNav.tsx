import React, { useState } from "react";
import Links from "./Links";
import { FaAngleDoubleRight, FaWpforms } from "react-icons/fa";
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
        <div
          className={styles.header}
          style={{
            justifyContent: navWidth !== "15rem" ? "center" : "inherit",
          }}
        >
          <FaWpforms className={styles.icon} />
          {navWidth === "15rem" && <h1>HRMS</h1>}
        </div>
        <div className={styles.links}>
          <Links navWidth={navWidth} />
        </div>
      </div>
      <div className={styles["expand-bttn"]} onClick={() => toggleNav()}>
        <FaAngleDoubleRight />
      </div>
    </div>
  );
};

export default LeftNav;

/*


  have it manually style into div 
  have right side move based off of that (have the width change based off of that)



  div container 
    1) logo
    2) nav links
    3) account
    4) expand button


*/
