import React from "react";
import { LeftNav, TopNav } from "../../Nav";
import { LayoutProps } from "./interface";
import styles from "../../../styles/layout/layout.module.scss";

const ResponsiveLayout = ({
  children,
  display,
  navWidth,
  toggleDisplay,
  toggleNav,
}: LayoutProps) => {
  return (
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
  );
};

export default ResponsiveLayout;
