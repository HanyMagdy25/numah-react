import React from "react";
import styles from "./Wishlist.module.css";
import wish1 from "../../assets/wish.png";
import purchase from "../../assets/purchase.jpg";
import gift1 from "../../assets/gift (1).png";
import gift2 from "../../assets/gift (2).png";
import gift3 from "../../assets/gift (3).png";
const Wishlist = () => {
  return (
    <div className={styles.wishlist}>
      <div className={styles.frames}>
        <div className={styles.frameCol}>
          <div className={styles.cardImg}>
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>Wishlist</h2>
              <p className={styles.cardDescription}>
                Save Your Favourite Tracks Upcoming Events Exclusive Releases
                Share Your Wishlist
              </p>
            </div>
            <img src={wish1} alt="feature" />
          </div>
        </div>
        <div className={styles.frameCol}>
          <div className={styles.cardNormal}>
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>Direct Artist Support</h2>
              <p className={styles.cardDescription}>
                Support your favourite artists directly on Numah. Contribute to
                Their Journey Exclusive Fan Experiences Artist Profiles
              </p>
            </div>
          </div>
          <div className={styles.cardNormal}>
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>Gift Songs to Friends</h2>
              <p className={styles.cardDescription}>
                Spread the joy of music by gifting songs to your friends with
                Numah's unique gifting feature
              </p>
              <div className={styles.giftsUser}>
                <img src={gift1} alt="gift" />
                <img src={gift2} alt="gift" />
                <img src={gift3} alt="gift" />
                <div className={styles.more}>1+</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameCol}>
          <div className={styles.cardImgAbsolute}>
            <img src={purchase} alt="feature" />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>Purchase music</h2>
              <p className={styles.cardDescription}>
                Upgrade your music experience Free Tier Premium Subscription
                Unlimited Downloads Early Access to New Releases Exclusive
                Playlists:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
