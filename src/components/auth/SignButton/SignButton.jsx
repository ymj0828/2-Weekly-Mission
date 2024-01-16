import styles from "./SignButton.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignButton = ({ text }) => {
  return <button className={cx("button")}>{text}</button>;
};

export default SignButton;
