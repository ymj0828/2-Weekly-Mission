import styles from "./FolderToolBar.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import FolderToolBarTab from "../FolderToolBarTab/FolderToolBarTab";
import AddFolderButton from "../AddFolderButton/AddFolderButton";
import ActionButtons from "../common/ActionButtons/ActionButtons";
import ModalInput from "../common/ModalInput/ModalInput";
import ModalShare from "../common/ModalShare/ModalShare";
import ModalAlert from "../common/ModalAlert/ModalAlert";
import useKakaoShare from "../../util/useKakaoShare";

const cx = classNames.bind(styles);

const FolderToolBar = ({ foldersData, selectedFolderId, onFolderClick }) => {
  const [openModal, setOpenModal] = useState(null);
  const { shareKakao } = useKakaoShare();

  if (!foldersData) {
    return;
  }

  const folderName =
    "" === selectedFolderId
      ? "전체"
      : foldersData?.find(({ id }) => id === selectedFolderId)?.name;

  const closeModal = () => setOpenModal(null);

  const shareLink = `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`;

  const handleKakaoClick = () => {
    shareKakao({
      url: shareLink,
      title: "Linkbrary",
      description: "링크를 저장하고 공유하는 가장 쉬운 방법",
      imageUrl:
        "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
    });
  };

  const handleFacebookClick = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);

  const handleLinkCopyClick = () => {
    navigator.clipboard.writeText(shareLink);
  };

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
      <AddFolderButton onClick={() => setOpenModal("addFolder")} />
      <ModalInput
        isOpen={openModal === "addFolder"}
        onCloseClick={closeModal}
        title="폴더 추가"
        buttonText="추가하기"
      />
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== "" && (
        <>
          <ActionButtons openModal={openModal} setOpenModal={setOpenModal} />
          <ModalShare
            isOpen={openModal === "share"}
            onCloseClick={closeModal}
            title="폴더 공유"
            shareElement={folderName}
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFacebookClick}
            onLinkCopyClick={handleLinkCopyClick}
          />
          <ModalInput
            isOpen={openModal === "rename"}
            onCloseClick={closeModal}
            title="폴더 이름 변경"
            buttonText="변경하기"
          />
          <ModalAlert
            isOpen={openModal === "delete"}
            onCloseClick={closeModal}
            title="폴더 삭제"
            buttonText="삭제하기"
            deleteElement={folderName}
          />
        </>
      )}
    </div>
  );
};

export default FolderToolBar;
