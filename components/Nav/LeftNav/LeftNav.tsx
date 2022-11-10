import React, { useState } from "react";
import { Header, Links } from "./components";
import styles from "../../../styles/layout/left-nav/leftNav.module.scss";

const LeftNav = ({ navWidth }: { navWidth: string }) => {
  return (
    <div className={styles.main} style={{ width: navWidth }}>
      <div className={styles.top}>
        <Header navWidth={navWidth} />
        <Links navWidth={navWidth} />
      </div>
    </div>
  );
};

export default LeftNav;

/*



*/
