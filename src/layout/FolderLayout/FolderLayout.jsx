import styles from "./FolderLayout.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FolderLayout = ({ addLinkForm, searchBar, folderToolBar, cardList }) => {
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
