import styles from "./FolderToolBarTab.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FolderToolBarTab = ({ text, onFolderClick, id, isSelected = false }) => {
  return (
    <button
      className={cx("button", { selected: isSelected })}
      onClick={() => onFolderClick(id)}
    >
      {text}
    </button>
  );
};

export default FolderToolBarTab;
