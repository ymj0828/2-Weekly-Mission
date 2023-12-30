import styles from "./FolderInformation.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FolderInformation = ({ ownerData }) => {
  if (!ownerData) {
    return;
  }

  const { name: folderName, owner } = ownerData;
  const { name: ownerName, profileImageSource: ownerProfileImage } = owner;

  return (
    <div className={cx("container")}>
      <img
        className={cx("owner-image")}
        src={ownerProfileImage}
        alt="폴더 소유자의 프로필 이미지"
      />
      <span className={cx("owner-name")}>{ownerName}</span>
      <span className={cx("folder-name")}>{folderName}</span>
    </div>
  );
};

export default FolderInformation;
