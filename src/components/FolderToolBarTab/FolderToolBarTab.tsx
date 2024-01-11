import styles from "./FolderToolBarTab.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderToolBarTabProps = {
  text: string;
  id: string | number;
  isSelected: boolean;
  onFolderClick: (id: string | number) => void;
};

const FolderToolBarTab = ({
  text,
  id,
  isSelected = false,
  onFolderClick,
}: FolderToolBarTabProps) => {
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
