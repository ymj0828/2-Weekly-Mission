import styles from "./CardList.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import useGetData from "../../../util/useGetData";
import Card from "../Card/Card";

const cx = classNames.bind(styles);

const CardList = ({ linksData, folder = false }) => {
  const { data: folderData } = useGetData("users/1/folders") || {};
  const [hoveredCardId, setHoveredCardId] = useState(false);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  if (!linksData) {
    return;
  }

  return (
    <ul className={cx("card-list")}>
      {linksData.map((links) => (
        <li
          className={cx("card-list-item")}
          key={links.id}
          onMouseOver={() => setHoveredCardId(links.id)}
          onMouseLeave={() => setHoveredCardId(false)}
        >
          <Card
            data={links}
            isZoomedIn={links.id === hoveredCardId}
            isfolder={folder}
            folderData={folderData}
            selectedFolderId={selectedFolderId}
            setSelectedFolderId={setSelectedFolderId}
          />
        </li>
      ))}
    </ul>
  );
};
export default CardList;
