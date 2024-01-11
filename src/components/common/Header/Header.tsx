import Link from "next/link";
import styles from "./Header.module.css";
import classNames from "classnames/bind";
import Profile from "@/components/common/Profile/Profile";
import Logo from "@public/images/logo.svg";

const cx = classNames.bind(styles);

type HeaderProps = {
  isSticky: boolean;
};

const Header = ({ isSticky }: HeaderProps) => {
  return (
    <header className={cx("container", { sticky: isSticky })}>
      <div className={cx("header-wrap")}>
        <Link href="/">
          <Logo className={cx("logo")} alt="Linkbrary 로고" />
        </Link>
        <Profile />
      </div>
    </header>
  );
};

export default Header;
