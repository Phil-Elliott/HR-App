import React from "react";
import { Header, Links } from "./components";
import styles from "../../../styles/layout/left-nav/leftNav.module.scss";
import {
  FaHome,
  FaBuilding,
  FaUser,
  FaTimes,
  FaWalking,
  FaPen,
  FaMoneyCheck,
  FaCheck,
  FaToiletPaper,
  FaTools,
} from "react-icons/fa";

const LeftNav = ({ navWidth }: { navWidth: string }) => {
  const NavLinks = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/",
    },
    {
      name: "Company",
      icon: <FaBuilding />,
      path: "/company",
    },
    {
      name: "Employees",
      icon: <FaUser />,
      path: "/employees",
    },
    {
      name: "Attendance",
      icon: <FaTimes />,
      path: "/attendance",
    },
    {
      name: "Leave",
      icon: <FaWalking />,
      path: "/leave",
    },
    {
      name: "Claims",
      icon: <FaPen />,
      path: "/claims",
    },
    {
      name: "Payroll",
      icon: <FaMoneyCheck />,
      path: "/payroll",
    },
    {
      name: "Appraisal",
      icon: <FaCheck />,
      path: "/appraisal",
    },
    {
      name: "Reporting",
      icon: <FaToiletPaper />,
      path: "/reporting",
    },
  ];

  return (
    <div className={styles.main} style={{ width: navWidth }}>
      <div className={styles.top}>
        <Header navWidth={navWidth} />
        {NavLinks.map((link) => (
          <Links
            navWidth={navWidth}
            icon={link.icon}
            path={link.path}
            name={link.name}
          />
        ))}
      </div>
      <div className={styles.bottom}>
        <Links
          navWidth={navWidth}
          icon={<FaTools />}
          path={"/settings"}
          name={"Settings"}
        />
      </div>
    </div>
  );
};

export default LeftNav;

// https://www.npmjs.com/package/react-icons  (react icons links)
