import React from "react";
import { Link } from "react-router-dom";
import styles from "./ForFans.module.css";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Images
import frame1 from "../../assets/frame.png";
import frame2 from "../../assets/Frame2.png";
import frame3 from "../../assets/Frame3.png";
import frame4 from "../../assets/middleFrame.png";
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
const dataFrames = [
  {
    id: 1,
    image: frame1,
  },
  {
    id: 2,
    image: frame4,
  },
  {
    id: 3,
    image: frame3,
  },
  {
    id: 4,
    image: frame4,
  },
];

const FrameLink = ({ to, text, imgSrc, imgAlt }) => (
  <div className={styles.oneLinkDiv}>
    {imgSrc && <img src={imgSrc} alt={imgAlt} className={styles.newImg} />}
    <Link to={to} className={styles.oneLink}>
      {text}
    </Link>
  </div>
);
const ForFans = () => {
  return (
    <div className={styles.forFans}>
      <h2 className={styles.title}>Numah for Fans</h2>
      <p className={styles.description}>
        Become a part of our vibrant musical family by signing up today. Enjoy
        exclusive access to new music, artist content, and much more.
      </p>
      <div className={styles.framesDesktop}>
        {/* Left Column */}
        <div className={styles.frameCol}>
          <div className={styles.diffrentFrame}>
            <FrameLink
              to="/NewMusic"
              text="New music"
              imgSrc={new1}
              imgAlt="New music"
            />
            <FrameLink
              to="/NewMusic"
              text="New artist"
              imgSrc={new2}
              imgAlt="New artist"
            />
            <FrameLink to="/NewCommunity" text="New community" />
          </div>
          <div className={styles.oneFrame}>
            <img src={frame2} alt="frame" />
          </div>
        </div>
        {/* Middle Column */}
        <div className={styles.middle}>
          <div className={styles.oneFrame}>
            <img src={frame4} alt="frame" />
          </div>
        </div>
        {/* Right Column */}
        <div className={styles.frameCol}>
          <div className={styles.oneFrame}>
            <img src={frame1} alt="frame" />
          </div>
          <div className={styles.oneFrame}>
            <img src={frame3} alt="frame" />
          </div>
        </div>
      </div>
      <div className={styles.framesMobile}>
        <div className={styles.diffrentFrame}>
          <FrameLink
            to="/NewMusic"
            text="New music"
            imgSrc={new1}
            imgAlt="New music"
          />
          <FrameLink
            to="/NewMusic"
            text="New artist"
            imgSrc={new2}
            imgAlt="New artist"
          />
          <FrameLink to="/NewCommunity" text="New community" />
        </div>

        <div className={styles.divSwiper}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              410: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2.5,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3.5,
              },
              820: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {dataFrames?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.oneFrame}>
                  <img src={item?.image} alt="frame" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ForFans;
