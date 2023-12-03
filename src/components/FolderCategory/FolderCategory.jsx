import { useState, useEffect } from "react";
import * as S from "./FolderCategoryTabList.style";
import getLink from "../../api/getLink";
import getUserLinks from "../../api/getUserLinks";

const FolderCategory = () => {
  const [tabData, setTabData] = useState([]);
  const [currentTab, setCurrentTab] = useState("");

  const handleLoadLinkData = async () => {
    const links = await getLink();
    setTabData(links);
  };

  useEffect(() => {
    handleLoadLinkData();
  }, []);

  const handleFolder = () => {
    setCurrentTab("");
  };

  return (
    <>
      <S.TabList>
        <S.Tab onClick={handleFolder}>전체</S.Tab>
        {tabData.map((tabData) => (
          <FolderCategoryTab
            key={tabData.id}
            id={tabData.id}
            name={tabData.name}
            setCurrentTab={setCurrentTab}
          />
        ))}
      </S.TabList>
      <FolderCategoryLinkList currentTab={currentTab} />
    </>
  );
};

const FolderCategoryTab = ({ id, name, setCurrentTab }) => {
  const handleFolder = (id) => {
    setCurrentTab(id);
  };

  return <S.Tab onClick={() => handleFolder(id)}>{name}</S.Tab>;
};

const FolderCategoryLinkList = ({ currentTab }) => {
  const [userLinksData, setUserLinksData] = useState([]);

  const handleLoadLinkData = async () => {
    const userLinks = await getUserLinks(currentTab);
    setUserLinksData(userLinks);
  };

  useEffect(() => {
    handleLoadLinkData();
  }, []);

  console.log(userLinksData);
};

export default FolderCategory;
