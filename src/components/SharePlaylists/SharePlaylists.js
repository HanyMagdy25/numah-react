import React from "react";
import { Link } from "react-router-dom";
import styles from "./SharePlaylists.module.css";
import img1 from "../../assets/sharePlaylist (1).png";
import img2 from "../../assets/sharePlaylist (2).png";
import img3 from "../../assets/sharePlaylist (3).png";
import img4 from "../../assets/sharePlaylist (4).png";

const SharePlaylists = () => {
  return (
    <div className={styles.sharePlaylists}>
      <h2 className={styles.title}>Make and share Playlists</h2>
      <div className={styles.frames}>
        <div className={styles.links}>
          <div className={styles.oneLinkDiv}>
            <Link to="/" className={styles.oneLink}>
              New community
            </Link>
          </div>
          <div className={styles.oneLinkDiv}>
            <Link to="/" className={styles.oneLink}>
              Create Custom Playlists
            </Link>
          </div>
          <div className={styles.oneLinkDiv}>
            <Link to="/" className={styles.oneLink}>
              Share with Community
            </Link>
          </div>
          <div className={styles.oneLinkDiv}>
            <Link to="/" className={styles.oneLink}>
              Explore Community
            </Link>
          </div>
        </div>
        <div className={styles.circleImages}>
          <div className={styles.circle}>
            <img src={img2} alt="img" className={styles.img} />
          </div>
          <div className={styles.circle}>
            <img src={img4} alt="img" className={styles.img} />
          </div>
          <div className={styles.circle}>
            <img src={img1} alt="img" className={styles.img} />
          </div>
          <div className={styles.circle}>
            <img src={img3} alt="img" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePlaylists;
