import React from "react";
import { Link } from "react-router-dom";
import styles from "./ForFans.module.css";
import frame1 from "../../assets/frame.png";
import frame2 from "../../assets/Frame2.png";
import frame3 from "../../assets/Frame3.png";
import frame4 from "../../assets/middleFrame.png";
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
const ForFans = () => {
  return (
    <div className={styles.forFans}>
      <h2 className={styles.title}>Numah for Fans</h2>
      <p className={styles.description}>
        Become a part of our vibrant musical family by signing up today. Enjoy
        exclusive access to new music, artist content, and much more.
      </p>
      <div className={styles.frames}>
        <div className={styles.frameCol}>
          <div className={styles.diffrentFrame}>
            <div className={styles.oneLinkDiv}>
              <Link to="/NewMusic" className={styles.oneLink}>
                New music
              </Link>
              <img src={new1} alt="new" className={styles.newImg} />
            </div>
            <div className={styles.oneLinkDiv}>
              <img src={new2} alt="new" className={styles.newImg} />
              <Link to="/NewMusic" className={styles.oneLink}>
                New artist
              </Link>
            </div>
            <div className={styles.oneLinkDiv}>
              <Link to="/NewCommunity" className={styles.oneLink}>
                New community
              </Link>
            </div>
          </div>
          <div className={styles.oneFrame}>
            <img src={frame2} alt="frame" />
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.oneFrame}>
            <img src={frame4} alt="frame" />
          </div>
        </div>

        <div className={styles.frameCol}>
          <div className={styles.oneFrame}>
            <img src={frame1} alt="frame" />
          </div>
          <div className={styles.oneFrame}>
            <img src={frame3} alt="frame" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForFans;
