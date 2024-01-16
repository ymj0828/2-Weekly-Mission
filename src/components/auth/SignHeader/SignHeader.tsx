import Link from "next/link";
import styles from "./SignHeader.module.css";
import classNames from "classnames/bind";
import Logo from "@public/images/logo.svg";

const cx = classNames.bind(styles);

const SignHeader = ({ text, linkText, href }: any) => {
  return (
    <div className={cx("container")}>
      <Link href="/">
        <Logo className={cx("logo")} alt="Linkbrary 로고" />
      </Link>
      <p className={cx("text")}>
        {text}
        <Link className={cx("link")} href={href}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default SignHeader;
