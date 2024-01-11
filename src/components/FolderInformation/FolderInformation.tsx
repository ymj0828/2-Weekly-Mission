import Image from "next/image";
import styles from "./FolderInformation.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderInformationProps = {
  ownerData: {
    owner: {
      name: string;
      profileImageSource: string;
    };
    name: string;
  };
};

const FolderInformation = ({ ownerData }: FolderInformationProps) => {
  if (!ownerData) {
    return;
  }

  const { name: folderName, owner } = ownerData;
  const { name: ownerName, profileImageSource: ownerProfileImage } = owner;

  return (
    <div className={cx("container")}>
      <div className={cx("owner-image")}>
        <Image src={ownerProfileImage} fill alt="폴더 소유자의 프로필 이미지" />
      </div>
      <span className={cx("owner-name")}>{ownerName}</span>
      <span className={cx("folder-name")}>{folderName}</span>
    </div>
  );
};

export default FolderInformation;
