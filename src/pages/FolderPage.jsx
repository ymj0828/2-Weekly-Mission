import { useState } from "react";
import useGetData from "../util/useGetData";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import FolderLayout from "../layout/FolderLayout/FolderLayout";
import AddLinkForm from "../components/AddLinkForm/AddLinkForm";
import SearchBar from "../components/SearchBar/SearchBar";
import FolderToolBar from "../components/FolderToolBar/FolderToolBar";
import CardList from "../components/common/CardList/CardList";
import NoLink from "../components/NoLink/NoLink";

const FolderPage = () => {
  const { data: folders } = useGetData("users/1/folders") || {};
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const { data: folderDatas } =
    useGetData(`users/1/links?folderId=${selectedFolderId}`) || {};

  return (
    <BaseLayout isSticky={false}>
      <FolderLayout
        addLinkForm={<AddLinkForm />}
        searchBar={<SearchBar />}
        folderToolBar={
          <FolderToolBar
            foldersData={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={(id) => setSelectedFolderId(id)}
          />
        }
        cardList={
          folderDatas && folderDatas.length > 0 ? (
            <CardList linksData={folderDatas} folder={true} />
          ) : (
            <NoLink />
          )
        }
      />
    </BaseLayout>
  );
};

export default FolderPage;
