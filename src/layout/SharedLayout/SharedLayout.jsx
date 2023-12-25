import styles from "./SharedLayout.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SharedLayout = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div>
      {folderInfo}
      <div className={cx("content")}>
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};

export default SharedLayout;
