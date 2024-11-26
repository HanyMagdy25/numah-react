import React from "react";
import styles from "./Features.module.css";
import musicSign from "../../assets/musicSign.png";
import feaature1 from "../../assets/feature.png";
const Features = () => {
  return (
    <div className={styles.features}>
      <h2 className={styles.title}>
        Get started with our Features of the Numah App
      </h2>
      <div className={styles.frames}>
        <div className={styles.frameCol}>
          <div className={styles.cardImg}>
            <img src={feaature1} alt="feature" />
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>Explore New Music</h2>
              <p className={styles.cardDescription}>
                Discover a diverse range of artists and genres. Our platform is
                designed to help you find hidden gems and the latest hits that
                match your taste.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frameCol}>
          <div className={styles.cardImgAbsolute}>
            <img src={musicSign} alt="feature" />
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>Explore New Music</h2>
              <p className={styles.cardDescription}>
                Discover a diverse range of artists and genres. Our platform is
                designed to help you find hidden gems and the latest hits that
                match your taste.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frameCol}>
          <div className={styles.cardNormal}>
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>Exclusive Content</h2>
              <p className={styles.cardDescription}>
                Gain access to exclusive interviews, behind-the-scenes footage,
                and special performances from your favourite artists. Stay
                connected with the music you love.
              </p>
            </div>
          </div>
          <div className={styles.cardNormal}>
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>Engage with Artists</h2>
              <p className={styles.cardDescription}>
                Participate in Q&A sessions, live chats, and virtual
                meet-and-greets with artists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
