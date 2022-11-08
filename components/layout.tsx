import { Meta } from "./meta";
import LeftNav from "./Nav/LeftNav/LeftNav";
import TopNav from "./Nav/TopNav/TopNav";
import styles from "../styles/layout/layout.module.scss";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className={styles.main}>
      <Meta />
      <LeftNav />
      <div className={styles["right-container"]}>
        <TopNav />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

/*
  sidenav 
  https://mui.com/material-ui/react-drawer/
  persistent drawer or mini variant drawer?


*/
