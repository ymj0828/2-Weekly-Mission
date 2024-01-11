import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";
import classNames from "classnames/bind";
import ModalAlert from "@/components/common/ModalAlert/ModalAlert";
import ModalAddLink from "@/components/common/ModalAddLink/ModalAddLink";
import getFormatDate from "@/util/getFormatDate";
import getElapsedTime from "@/util/getElapsedTime";
import NoImage from "@public/images/folder-preview-no-image.svg";
import IconStar from "@public/images/icon/icon-star.svg";
import IconMore from "@public/images/icon/icon-more.svg";

const cx = classNames.bind(styles);

interface CardProps {
  data: {
    createdAt?: string;
    created_at?: string;
    description: string;
    imageSource?: string;
    image_source?: string;
    url: string;
  };
  isZoomedIn: boolean;
  isfolder?: boolean;
  folderData?: any;
  selectedFolderId: number | null;
  setSelectedFolderId: React.Dispatch<React.SetStateAction<number | null>>;
}

const Card = ({
  data,
  isZoomedIn,
  isfolder = false,
  folderData,
  selectedFolderId,
  setSelectedFolderId,
}: CardProps) => {
  const [isPopOver, setIsPopOver] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);
  const moreButton = useRef<HTMLButtonElement>(null);
  const { createdAt, created_at, description, imageSource, image_source, url } =
    data;
  const createdDate: Date = new Date(createdAt! || created_at!);

  const handleOpenPopOver = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPopOver(true);
  };

  const handleClickOutside = (e: any) => {
    if (moreButton.current && !moreButton.current.contains(e.target as Node)) {
      setIsPopOver(false);
    }
  };

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenModal("delete");
  };

  const handleAddClick = (e: MouseEvent<HTMLButtonElement>) => {
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
            <IconStar alt="즐겨찾기 아이콘" />
          </button>
        )}
        {imageSource || image_source ? (
          <img
            className={cx("preview-image", { "image-zoom-in": isZoomedIn })}
            src={imageSource || image_source}
            alt="링크 미리보기 이미지"
          />
        ) : (
          <NoImage
            className={cx("preview-image", { "image-zoom-in": isZoomedIn })}
            alt="링크 미리보기 이미지"
          />
        )}
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
              <IconMore alt="더보기 아이콘" />
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
