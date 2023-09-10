import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@ Lettalkanddesign. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="LetsTalkAndDesign"
        />
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="LetsTalkAndDesign"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="LetsTalkAndDesign"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="LetsTalkAndDesign"
        />
      </div>
    </div>
  );
};

export default Footer;