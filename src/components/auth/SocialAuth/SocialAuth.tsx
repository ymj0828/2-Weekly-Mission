import Link from "next/link";
import Image from "next/image";
import styles from "./SocialAuth.module.css";
import classNames from "classnames/bind";
import socialGoogle from "@public/images/social-google.png";
import socialKakao from "@public/images/social-kakao.png";

const cx = classNames.bind(styles);

const SocialAuth = ({ text }: any) => {
  return (
    <div className={cx("container")}>
      <span>{text}</span>
      <div className={cx("images-wrap")}>
        <Link href="https://www.google.com/">
          <Image src={socialGoogle} alt="구글로 로그인하기" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <Image src={socialKakao} alt="카카오로 로그인하기" />
        </Link>
      </div>
    </div>
  );
};

export default SocialAuth;
