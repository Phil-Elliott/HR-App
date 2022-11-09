import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "../../../../styles/layout/left-nav/expandBttn.module.scss";

const ExpandBttn = ({ toggleNav }: { toggleNav: any }) => {
  return (
    <div className={styles["expand-bttn"]} onClick={() => toggleNav()}>
      <FaAngleDoubleRight />
    </div>
  );
};

export default ExpandBttn;
