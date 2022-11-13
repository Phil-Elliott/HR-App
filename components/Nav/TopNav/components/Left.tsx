import React from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/layout/top-nav/left.module.scss";
import { FaAngleLeft } from "react-icons/fa";

const Left = ({
  toggleNav,
  navWidth,
}: {
  toggleNav: any;
  navWidth: string;
}) => {
  const router = useRouter();

  // returns the page name from the router in the correct form to be displayed
  const getPageName = () => {
    const path = router.pathname;
    let pageName;
    if (path === "/") {
      pageName = "Home";
    } else {
      pageName = path.split("/")[1];
    }
    return pageName[0].toUpperCase() + pageName.slice(1).toLowerCase();
  };

  return (
    <div className={styles.leftContainer}>
      <div className={styles.left} onClick={() => toggleNav()}>
        {navWidth === "wide" ? (
          <FaAngleLeft className={styles["arrow-left"]} />
        ) : (
          <FaAngleLeft className={styles["arrow-right"]} />
        )}
      </div>
      <h1 className={styles["page-name"]}>{getPageName()}</h1>
    </div>
  );
};

export default Left;
