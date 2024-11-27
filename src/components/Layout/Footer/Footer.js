import styles from "./Footer.module.css";
import LogoImage from "../../../assets/logoImg.png";
import { ReactComponent as Insta } from "../../../assets/social/Group.svg";
import { ReactComponent as X } from "../../../assets/social/path1009.svg";
import { ReactComponent as Facebook } from "../../../assets/social/Vector.svg";
import { Link } from "react-router-dom";
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
  const usfulLinksData = [
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
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Company</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {companyData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Comminities</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {communitiesData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Usful Links</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {usfulLinksData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.allIcons}>
              <Link data-social="Facebook" href="/" className={styles.oneIcon}>
                <Facebook />
              </Link>
              <Link data-social="X" href="/" className={styles.oneIcon}>
                <X />
              </Link>
              <Link data-social="Instagram" href="/" className={styles.oneIcon}>
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
