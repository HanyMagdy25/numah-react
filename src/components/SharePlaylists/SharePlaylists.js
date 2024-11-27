import React from "react";
import { Link } from "react-router-dom";
import styles from "./SharePlaylists.module.css";
import img1 from "../../assets/sharePlaylist (1).png";
import img2 from "../../assets/sharePlaylist (2).png";
import img3 from "../../assets/sharePlaylist (3).png";
import img4 from "../../assets/sharePlaylist (4).png";

const PlaylistLink = ({ to, text }) => (
  <div className={styles.oneLinkDiv}>
    <Link to={to} className={styles.oneLink}>
      {text}
    </Link>
  </div>
);

const CircleImage = ({ src, alt }) => (
  <div className={styles.circle}>
    <img src={src} alt={alt} className={styles.img} />
  </div>
);

const SharePlaylists = () => {
  const playlistLinks = [
    { text: "New community", to: "/" },
    { text: "Create Custom Playlists", to: "/" },
    { text: "Share with Community", to: "/" },
    { text: "Explore Community", to: "/" },
  ];
  // Images data
  const circleImages = [
    { src: img2, alt: "Community collaboration" },
    { src: img4, alt: "Playlist customization" },
    { src: img1, alt: "Music sharing" },
    { src: img3, alt: "Community exploration" },
  ];
  return (
    <div className={styles.sharePlaylists}>
      <h2 className={styles.title}>Make and share Playlists</h2>
      <div className={styles.frames}>
        <div className={styles.links}>
          {playlistLinks.map((link, index) => (
            <PlaylistLink key={index} to={link.to} text={link.text} />
          ))}
        </div>
        <div className={styles.circleImages}>
          {circleImages.map((image, index) => (
            <CircleImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharePlaylists;
