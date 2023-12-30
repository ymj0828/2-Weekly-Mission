import styles from "./AddLinkForm.module.css";
import classNames from "classnames/bind";
import iconLink from "../../assets/icon/icon-link.svg";
import { useState } from "react";
import ModalAddLink from "../common/ModalAddLink/ModalAddLink";
import useGetData from "../../util/useGetData";

const cx = classNames.bind(styles);

const AddLinkForm = () => {
  const { data: folderData } = useGetData("users/1/folders") || {};
  const [openModal, setOpenModal] = useState(null);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [linkUrl, setLinkUrl] = useState("");

  const handleChange = (e) => {
    setLinkUrl(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setOpenModal("addFolder");
  };

  const closeModal = () => setOpenModal(null);

  return (
    <div className={cx("container")}>
      <form className={cx("form")}>
        <img className={cx("icon")} src={iconLink} alt="링크 추가하기 아이콘" />
        <input
          className={cx("input")}
          type="text"
          placeholder="링크를 추가해 보세요"
          onChange={handleChange}
        />
        <button className={cx("button")} onClick={handleAddClick}>
          추가하기
        </button>
      </form>
      <ModalAddLink
        isOpen={openModal === "addFolder"}
        onCloseClick={closeModal}
        title="폴더에 추가"
        buttonText="추가하기"
        addElement={linkUrl}
        folderData={folderData}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
      />
    </div>
  );
};
export default AddLinkForm;
