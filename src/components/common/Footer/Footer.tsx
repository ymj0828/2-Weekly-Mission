import styles from "./Footer.module.css";
import classNames from "classnames/bind";
import FacebookIcon from "@public/images/sns-facebook.svg";
import TwitterIcon from "@public/images/sns-twitter.svg";
import YoutubeIcon from "@public/images/sns-youtube.svg";
import InstagramIcon from "@public/images/sns-instagram.svg";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("container")}>
      <div className={cx("footer-wrap")}>
        <div className={cx("corplogo-wrap")}>©codeit - 2023</div>
        <div className={cx("policy-faq-wrap")}>
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div className={cx("sns-wrap")}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon alt="페이스북으로 이동" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <TwitterIcon alt="트위터로 이동" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <YoutubeIcon alt="유튜브로 이동" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon alt="인스타그램으로 이동" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
