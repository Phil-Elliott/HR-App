import React from "react";
import Logo from "../../../Shared/Logo";
import styles from "../../../../styles/layout/top-nav/responsive.module.scss";
import { FaBars } from "react-icons/fa";

const ResponsiveLeft = ({ toggleDisplay }: { toggleDisplay: any }) => {
  return (
    <>
      <FaBars
        className={styles["hamburger-icon"]}
        onClick={() => toggleDisplay()}
      />
      <Logo navWidth="wide" display="responsive" />
    </>
  );
};

export default ResponsiveLeft;
