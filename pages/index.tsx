import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/home/home.module.scss";

export default function Dashboard() {
  return <div className={styles.main}>Home</div>;
}

/*

5) Make responsive
  - remove arrow
  - logo and hamburger menu
  - make list 100% width on click

top
  - Hamburguer menu
  - Logo and name
  - account bubble (click for drop menu)

slide out menu
  - list of links
  -make them come out 100% width on click



1) Clean up sass
2) Add variables and mixins 
3) Start working on testing

*/
