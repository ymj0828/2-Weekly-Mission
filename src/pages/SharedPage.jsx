import useGetData from "../util/useGetData";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import SharedLayout from "../layout/SharedLayout/SharedLayout";
import FolderInformation from "../components/FolderInformation/FolderInformation";
import SearchBar from "../components/SearchBar/SearchBar";
import CardList from "../components/common/CardList/CardList";
import { useSearchLink } from "../util/useSearchLink";

const SharedPage = () => {
  const { folder } = useGetData("sample/folder") || {};
  const { links } = folder || [];
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <BaseLayout>
      <SharedLayout
        folderInfo={<FolderInformation ownerData={folder} />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        cardList={<CardList linksData={result} />}
      />
    </BaseLayout>
  );
};

export default SharedPage;
