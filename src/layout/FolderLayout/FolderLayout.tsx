import { ReactNode } from "react";
import styles from "./FolderLayout.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderLayoutProps = {
  addLinkForm: ReactNode;
  searchBar: ReactNode;
  folderToolBar: ReactNode;
  cardList: ReactNode;
};

const FolderLayout = ({
  addLinkForm,
  searchBar,
  folderToolBar,
  cardList,
}: FolderLayoutProps) => {
  return (
    <div>
      {addLinkForm}
      <div className={cx("content")}>
        {searchBar}
        {folderToolBar}
        {cardList}
      </div>
    </div>
  );
};

export default FolderLayout;
