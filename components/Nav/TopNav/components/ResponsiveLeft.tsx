import React from "react";
import Logo from "../../../Shared/Logo";
import styles from "../../../../styles/layout/top-nav/responsive.module.scss";
import { FaBars } from "react-icons/fa";

const ResponsiveLeft = ({ toggleDisplay }: { toggleDisplay: any }) => {
  return (
    // <div className={styles.main}>
    <>
      <FaBars
        className={styles["hamburger-icon"]}
        onClick={() => toggleDisplay()}
      />
      <Logo navWidth="wide" display="responsive" />
    </>
    // </div>
  );
};

export default ResponsiveLeft;

/*

  1) add hamburger icon (use a generic icon)
  2) Add logo and name (use a shared component)


*/
