import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../../styles/layout/left-nav/links.module.scss";

interface LinkProps {
  name: string;
  icon: JSX.Element;
  path: string;
  navWidth: string;
}

const Links = ({ navWidth, path, name, icon }: LinkProps) => {
  const router = useRouter();
  return (
    <>
      <Link href={path} key={name}>
        <div
          // className={styles.link}
          className={router.pathname !== path ? styles.link : styles.activeLink}
          style={{
            justifyContent: navWidth !== "wide" ? "center" : "inherit",
          }}
        >
          <div className={styles.icon}>{icon}</div>
          {navWidth === "wide" && <div className={styles.name}>{name}</div>}
        </div>
      </Link>
    </>
  );
};

export default Links;
