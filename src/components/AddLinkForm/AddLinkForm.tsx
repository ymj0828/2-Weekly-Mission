import { ChangeEvent, MouseEvent, useState } from "react";
import styles from "./AddLinkForm.module.css";
import classNames from "classnames/bind";
import ModalAddLink from "@/components/common/ModalAddLink/ModalAddLink";
import useGetData from "@/util/useGetData";
import IconLink from "@public/images/icon/icon-link.svg";

const cx = classNames.bind(styles);

const AddLinkForm = () => {
  const { data: folderData }: any = useGetData("users/1/folders") || {};
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [linkUrl, setLinkUrl] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value);
  };

  const handleAddClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenModal("addFolder");
  };

  const closeModal = () => setOpenModal(null);

  return (
    <div className={cx("container")}>
      <form className={cx("form")}>
        <IconLink className={cx("icon")} alt="링크 추가하기 아이콘" />
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
