import React from "react";
import Link from "next/link";
import styles from "../../../../styles/layout/left-nav/links.module.scss";
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

const Links = ({ navWidth }: { navWidth: string }) => {
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
    {
      name: "Settings",
      icon: <FaTools />,
      path: "/settings",
    },
  ];

  return (
    <>
      {NavLinks.map((link) => (
        <Link href={link.path} key={link.name}>
          <div
            className={styles.link}
            style={{
              justifyContent: navWidth !== "15rem" ? "center" : "inherit",
            }}
          >
            <div className={styles.icon}>{link.icon}</div>
            {navWidth === "15rem" && (
              <div className={styles.name}>{link.name}</div>
            )}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Links;

//navWidth !== "15rem" &&
// {{ justifyContent: "center" }}
