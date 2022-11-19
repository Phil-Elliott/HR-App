import React from "react";
import { Links } from "./components";
import Logo from "../../Shared/Logo";
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
  FaPoop,
} from "react-icons/fa";

type LeftNavProps = {
  navWidth: string;
  toggleDisplay: () => void;
};

const LeftNav = ({ navWidth, toggleDisplay }: LeftNavProps) => {
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
    <div
      className={styles.main}
      style={{
        width:
          navWidth === "responsive"
            ? "100vw"
            : navWidth === "wide"
            ? "18rem"
            : "7rem",
      }}
    >
      <div className={styles.top}>
        <div className={styles["logo-container"]}>
          <Logo navWidth={navWidth} display="normal" />

          {navWidth === "responsive" && (
            <FaPoop
              className={styles["exit-logo"]}
              onClick={() => toggleDisplay()}
            />
          )}
        </div>
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
