import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
// Images
import LogoImage from "../../../assets/logoImg.png";
import { ReactComponent as Insta } from "../../../assets/social/Group.svg";
import { ReactComponent as X } from "../../../assets/social/path1009.svg";
import { ReactComponent as Facebook } from "../../../assets/social/Vector.svg";

const FooterGroup = ({ title, links }) => (
  <div className={styles.group}>
    <h2 className={styles.headTitle}>{title}</h2>
    <ul className={styles.ul}>
      {links.map((item, index) => (
        <li key={index}>
          <Link to={item.href} className={styles.link}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  // const isActive = (path) => {
  //   if (typeof window !== "undefined") {
  //     return window.location.pathname.includes(path);
  //   }
  //   return false;
  // };

  const companyData = [
    { label: "About", href: "/aboutUs" },
    { label: "Jobs", href: "/Jobs" },
    { label: "Press", href: "/Press" },
    { label: "News", href: "/News" },
  ];
  const communitiesData = [
    { label: "Artists", href: "/Artists" },
    { label: "Developers", href: "/Developers" },
    { label: "Labels", href: "/Labels" },
    { label: "Investors", href: "/Investors" },
    { label: "Brands", href: "/Brands" },
  ];
  const usefulLinksData = [
    { label: "Help", href: "/Help" },
    { label: "Gift", href: "/Gift" },
    { label: "Web Player", href: "/Web Player" },
  ];

  return (
    <footer className={[styles.footer].join(" ")}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <div className={styles.logoCol}>
              <Link href="/" className={styles.logo}>
                <img src={LogoImage} alt="Logo" />
              </Link>
            </div>
            <FooterGroup title="Company" links={companyData} />
            <FooterGroup title="Communities" links={communitiesData} />
            <FooterGroup title="Useful Links" links={usefulLinksData} />
          </div>
          <div className={styles.footerRight}>
            <div className={styles.allIcons}>
              <Link
                data-social="Facebook"
                aria-label="Facebook"
                href="/"
                className={styles.oneIcon}
              >
                <Facebook />
              </Link>
              <Link
                data-social="X"
                aria-label="X"
                href="/"
                className={styles.oneIcon}
              >
                <X />
              </Link>
              <Link
                data-social="Instagram"
                aria-label="Instagram"
                href="/"
                className={styles.oneIcon}
              >
                <Insta />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.rights}>© 2024 Numah | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
