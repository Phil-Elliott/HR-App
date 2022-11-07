import { Meta } from "./meta";
import LeftNav from "./leftNav/leftNav";
import TopNav from "./topNav/topNav";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Meta />
      <TopNav />
      <LeftNav />
      <main>{children}</main>
    </>
  );
};

export default Layout;

/*
  sidenav 
  https://mui.com/material-ui/react-drawer/
  persistent drawer or mini variant drawer?


*/
