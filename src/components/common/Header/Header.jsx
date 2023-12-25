import styles from "./Header.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import Profile from "../Profile/Profile";

const cx = classNames.bind(styles);

const Header = ({ isSticky }) => {
  return (
    <header className={cx("container", { sticky: isSticky })}>
      <div className={cx("header-wrap")}>
        <Link to="/" className={cx("logo")}>
          <img className={cx("logo-image")} src={logo} alt="Linkbrary 로고" />
        </Link>
        <Profile />
      </div>
    </header>
  );
};

export default Header;
