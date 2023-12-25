import styles from "./CardList.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import Card from "../Card/Card";

const cx = classNames.bind(styles);

const CardList = ({ linksData, folder = false }) => {
  const [hoveredCardId, setHoveredCardId] = useState(false);

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
          />
        </li>
      ))}
    </ul>
  );
};
export default CardList;
