import getFolder from "../../api/getFolder";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = () => {
  const [userData, setUserData] = useState([]);

  const handleLoadFolderData = async () => {
    const { links } = await getFolder();
    setUserData(links);
  };

  useEffect(() => {
    handleLoadFolderData();
  }, []);

  return (
    <ul>
      {userData.map((userData) => (
        <li key={userData.id}>
          <Card data={userData} />
        </li>
      ))}
    </ul>
  );
};
export default CardList;
