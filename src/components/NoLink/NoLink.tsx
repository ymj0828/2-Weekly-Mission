import styles from "./NoLink.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NoLink = () => {
  return (
    <div className={cx("container")}>
      <p className={cx("message")}>저장된 링크가 없습니다</p>
    </div>
  );
};

export default NoLink;
