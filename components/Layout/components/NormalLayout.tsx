import React from "react";
import { LeftNav, TopNav } from "../../Nav";
import { LayoutProps } from "./interface";
import styles from "../../../styles/layout/layout.module.scss";

const NormalLayout = ({
  children,
  navWidth,
  toggleDisplay,
  toggleNav,
}: LayoutProps) => {
  return (
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
    </div>
  );
};

export default NormalLayout;
