import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as BagIcon } from "../../../assets/bag.svg";
import { ReactComponent as UserIcon } from "../../../assets/user.svg";

import { ReactComponent as ArrowLeft } from "../../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/arrow-right.svg";
import { ReactComponent as Menuicon } from "../../../assets/menu.svg";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState();
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerInner} container`}>
        <button
          className={styles.menuBtn}
          type="button"
          onClick={() => setShowSidebar(true)}
          aria-label="menu"
        >
          <Menuicon fill="#FFD500" />
        </button>

        <div className={styles.left}>
          <div className={styles.arrows}>
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>
        <div className={styles.right}>
          <Link to="/" className={styles.premium}>
            Go Premium
          </Link>
          <div className={styles.icons}>
            <button
              className={`${styles.menuBtn} ${styles.menuBtnMobile}`}
              type="button"
              onClick={() => setShowSidebar(true)}
              aria-label="menu"
            >
              <Menuicon fill="#FFD500" />
            </button>
            <Link href="/cart" className={styles.icon}>
              <BagIcon />
            </Link>
            <Link href="/profile" className={styles.icon}>
              <UserIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
