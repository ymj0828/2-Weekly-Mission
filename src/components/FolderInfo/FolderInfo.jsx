import getFolder from "../../api/getFolder";
import { useState, useEffect } from "react";
import "./FolderInfo.css";

const FolderInfo = () => {
  const [userData, setUserData] = useState({});

  const handleLoadFolderData = async () => {
    const folderData = await getFolder();
    const { name: folderName } = folderData;
    const { name: ownerName, profileImageSource: ownerProfileImageSource } =
      folderData.owner;
    setUserData({ folderName, ownerName, ownerProfileImageSource });
  };

  useEffect(() => {
    handleLoadFolderData();
  }, []);

  const { folderName, ownerName, ownerProfileImageSource } = userData;

  return (
    <div className="folder-info-wrap">
      <img src={ownerProfileImageSource} alt="폴더 소유자의 프로필 이미지" />
      <span className="owner-name">@{ownerName}</span>
      <span className="folder-name">{folderName}</span>
    </div>
  );
};

export default FolderInfo;
