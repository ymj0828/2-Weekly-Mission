import { useState } from "react";
import styles from "./CardList.module.css";
import classNames from "classnames/bind";
import Card from "@/components/common/Card/Card";
import useGetData from "@/util/useGetData";

const cx = classNames.bind(styles);

type CardListProps = {
  linksData: {
    map: any;
    id: number;
    title: string;
    url: string;
    imageSource: string;
    alt: string;
    description: string;
    elapsedTime: string;
    createdAt: string;
  };
  folder: boolean;
};

const CardList = ({ linksData, folder = false }: CardListProps) => {
  const { data: folderData }: any = useGetData("users/1/folders") || {};
  const [hoveredCardId, setHoveredCardId] = useState(false);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

  if (!linksData) {
    return;
  }

  return (
    <ul className={cx("card-list")}>
      {linksData.map((links: any) => (
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
