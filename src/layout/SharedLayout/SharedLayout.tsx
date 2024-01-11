import { ReactNode } from "react";
import styles from "./SharedLayout.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SharedLayoutProps = {
  folderInfo: ReactNode;
  searchBar: ReactNode;
  cardList: ReactNode;
};

const SharedLayout = ({
  folderInfo,
  searchBar,
  cardList,
}: SharedLayoutProps) => {
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
