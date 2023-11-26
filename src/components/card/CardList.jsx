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
        <Card key={userData.id} data={userData} />
      ))}
    </ul>
  );
};
export default CardList;
