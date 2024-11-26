import React from "react";
import styles from "./Banner.module.css";

import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={bannerImg} alt="banner" className={styles.bannerImg} />
    </div>
  );
};

export default Banner;
