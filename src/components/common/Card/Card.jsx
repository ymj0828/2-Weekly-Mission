import styles from "./Card.module.css";
import classNames from "classnames/bind";
import noImage from "../../../assets/folder-preview-no-image.svg";
import iconStar from "../../../assets/icon/icon-star.svg";
import iconKebab from "../../../assets/icon/icon-kebab.svg";
import getFormatDate from "../../../util/getFormatDate";
import getElapsedTime from "../../../util/getElapsedTime";

const cx = classNames.bind(styles);

const Card = ({ data, isZoomedIn, isfolder = false }) => {
  const { createdAt, created_at, description, imageSource, image_source, url } =
    data;

  const createdDate = new Date(createdAt || created_at);

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
          <button className={cx("icon-kebab")}>
            <img src={iconKebab} alt="더보기 아이콘" />
          </button>
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
