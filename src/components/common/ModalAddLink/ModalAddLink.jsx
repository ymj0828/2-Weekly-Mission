import styles from "./ModalAddLink.module.css";
import classNames from "classnames/bind";
import ModalLayout from "../ModalLayout/ModalLayout";
import iconCheck from "../../../assets/icon/icon-check.svg";

const cx = classNames.bind(styles);

const ModalAddLink = ({
  isOpen,
  onCloseClick,
  title,
  buttonText,
  addElement,
  folderData,
  selectedFolderId,
  setSelectedFolderId,
}) => {
  if (!folderData) {
    return;
  }

  return (
    <ModalLayout isOpen={isOpen} onCloseClick={onCloseClick} title={title}>
      <p className={cx("share-text")}>{addElement}</p>
      <ul className={cx("list")}>
        {folderData.map((folder) => (
          <li
            className={cx("item", { selected: folder.id === selectedFolderId })}
            key={folder.id}
            onClick={() => setSelectedFolderId(folder.id)}
          >
            <span className={cx("folder-name")}>{folder.name}</span>
            <span className={cx("folder-count")}>
              {folder.link.count}개 링크
            </span>
            {folder.id === selectedFolderId && (
              <img className={cx("icon")} src={iconCheck} alt="체크 아이콘" />
            )}
          </li>
        ))}
      </ul>
      <button className={cx("button")}>{buttonText}</button>
    </ModalLayout>
  );
};

export default ModalAddLink;
