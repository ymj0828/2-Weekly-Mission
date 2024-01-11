import { Dispatch, SetStateAction } from "react";
import styles from "./ModalAddLink.module.css";
import classNames from "classnames/bind";
import ModalLayout from "@/components/common/ModalLayout/ModalLayout";
import IconCheck from "@public/images/icon/icon-check.svg";

const cx = classNames.bind(styles);

type AddLinkModalProps = {
  isOpen: boolean;
  title: string;
  addElement: string;
  folderData: {
    map: any;
    id: number;
    createdAt: string;
    name: string;
    userId: number;
    linkCount: number;
  };
  buttonText: string;
  selectedFolderId: number | null;
  setSelectedFolderId: Dispatch<SetStateAction<number | null>>;
  onCloseClick: () => void;
};

const ModalAddLink = ({
  isOpen,
  title,
  addElement,
  buttonText,
  folderData,
  selectedFolderId,
  setSelectedFolderId,
  onCloseClick,
}: AddLinkModalProps) => {
  if (!folderData) {
    return;
  }

  return (
    <ModalLayout isOpen={isOpen} onCloseClick={onCloseClick} title={title}>
      <p className={cx("share-text")}>{addElement}</p>
      <ul className={cx("list")}>
        {folderData.map((folder: any) => (
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
              <IconCheck className={cx("icon")} alt="체크 아이콘" />
            )}
          </li>
        ))}
      </ul>
      <button className={cx("button")}>{buttonText}</button>
    </ModalLayout>
  );
};

export default ModalAddLink;
