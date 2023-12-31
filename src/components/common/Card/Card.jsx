import styles from "./Card.module.css";
import classNames from "classnames/bind";
import noImage from "../../../assets/folder-preview-no-image.svg";
import iconStar from "../../../assets/icon/icon-star.svg";
import iconMore from "../../../assets/icon/icon-more.svg";
import getFormatDate from "../../../util/getFormatDate";
import getElapsedTime from "../../../util/getElapsedTime";
import { useEffect, useRef, useState } from "react";
import ModalAlert from "../ModalAlert/ModalAlert";
import ModalAddLink from "../ModalAddLink/ModalAddLink";

const cx = classNames.bind(styles);

const Card = ({
  data,
  isZoomedIn,
  isfolder = false,
  folderData,
  selectedFolderId,
  setSelectedFolderId,
}) => {
  const [isPopOver, setIsPopOver] = useState(false);
  const [openModal, setOpenModal] = useState(null);
  const moreButton = useRef(null);
  const { createdAt, created_at, description, imageSource, image_source, url } =
    data;
  const createdDate = new Date(createdAt || created_at);

  const handleOpenPopOver = (e) => {
    e.preventDefault();
    setIsPopOver(true);
  };

  const handleClickOutside = (e) => {
    if (moreButton.current && !moreButton.current.contains(e.target)) {
      setIsPopOver(false);
    }
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    setOpenModal("delete");
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setOpenModal("addFolder");
  };

  const closeModal = () => setOpenModal(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <a className={"card-wrap"} href={url} target="_blank" rel="noreferrer">
      <div className={cx("preview-image-wrap")}>
        {isfolder && (
          <button className={cx("icon-star")}>
            <img src={iconStar} alt="즐겨찾기 아이콘" />
          </button>
        )}
        <img
          className={cx("preview-image", { "image-zoom-in": isZoomedIn })}
          src={imageSource || image_source || noImage}
          alt="링크 미리보기 이미지"
        />
      </div>
      <div className={cx("link-information-wrap")}>
        {isfolder && (
          <>
            {isPopOver && (
              <div className={cx("pop-over")}>
                <button
                  className={cx("pop-over-button")}
                  onClick={handleDeleteClick}
                >
                  삭제하기
                </button>
                <button
                  className={cx("pop-over-button")}
                  onClick={handleAddClick}
                >
                  폴더에 추가
                </button>
              </div>
            )}
            <ModalAlert
              isOpen={openModal === "delete"}
              onCloseClick={closeModal}
              title="폴더 삭제"
              buttonText="삭제하기"
              deleteElement={url}
            />
            <ModalAddLink
              isOpen={openModal === "addFolder"}
              onCloseClick={closeModal}
              title="폴더에 추가"
              buttonText="추가하기"
              addElement={url}
              folderData={folderData}
              selectedFolderId={selectedFolderId}
              setSelectedFolderId={setSelectedFolderId}
            />
            <button
              className={cx("icon-more")}
              onClick={(e) => handleOpenPopOver(e)}
              ref={moreButton}
            >
              <img src={iconMore} alt="더보기 아이콘" />
            </button>
          </>
        )}
        <span className={cx("link-created-ago")}>
          {getElapsedTime(createdDate)}
        </span>
        <span className={cx("link-description")}>{description}</span>
        <span className={cx("link-created-time")}>
          {getFormatDate(createdDate)}
        </span>
      </div>
    </a>
  );
};

export default Card;
