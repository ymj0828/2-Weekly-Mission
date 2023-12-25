import styles from "./FolderToolBar.module.css";
import classNames from "classnames/bind";
import FolderToolBarTab from "../FolderToolBarTab/FolderToolBarTab";
import AddFolderButton from "../AddFolderButton/AddFolderButton";
import ActionButtons from "../common/ActionButtons/ActionButtons";

const cx = classNames.bind(styles);

const FolderToolBar = ({ foldersData, selectedFolderId, onFolderClick }) => {
  if (!foldersData) {
    return;
  }

  const folderName =
    "" === selectedFolderId
      ? "전체"
      : foldersData?.find(({ id }) => id === selectedFolderId)?.name;

  return (
    <div className={cx("container")}>
      <ul className={cx("tab-list")}>
        <li className={cx("tab", { selected: "" === selectedFolderId })}>
          <FolderToolBarTab
            key={"all"}
            text={"전체"}
            id={""}
            onFolderClick={() => onFolderClick("")}
            isSelected={"" === selectedFolderId}
          />
        </li>
        {foldersData?.map(({ id, name }) => (
          <li
            className={cx("tab", { selected: id === selectedFolderId })}
            key={id}
          >
            <FolderToolBarTab
              text={name}
              id={id}
              onFolderClick={() => onFolderClick(id)}
              isSelected={id === selectedFolderId}
            />
          </li>
        ))}
      </ul>
      <AddFolderButton />
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== "" && <ActionButtons />}
    </div>
  );
};

export default FolderToolBar;
