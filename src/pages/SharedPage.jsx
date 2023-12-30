import useGetData from "../util/useGetData";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import SharedLayout from "../layout/SharedLayout/SharedLayout";
import FolderInformation from "../components/FolderInformation/FolderInformation";
import SearchBar from "../components/SearchBar/SearchBar";
import CardList from "../components/common/CardList/CardList";

const SharedPage = () => {
  const { folder } = useGetData("sample/folder") || {};
  const { links } = folder || {};

  return (
    <BaseLayout>
      <SharedLayout
        folderInfo={<FolderInformation ownerData={folder} />}
        searchBar={<SearchBar />}
        cardList={<CardList linksData={links} />}
      />
    </BaseLayout>
  );
};

export default SharedPage;
