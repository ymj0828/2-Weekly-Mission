import { useState } from "react";
import useGetData from "@/util/useGetData";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import FolderLayout from "@/layout/FolderLayout/FolderLayout";
import AddLinkForm from "@/components/AddLinkForm/AddLinkForm";
import SearchBar from "@/components/SearchBar/SearchBar";
import FolderToolBar from "@/components/FolderToolBar/FolderToolBar";
import CardList from "@/components/common/CardList/CardList";
import NoLink from "@/components/NoLink/NoLink";
import { useSearchLink } from "@/util/useSearchLink";

const FolderPage = () => {
  const { data: folders }: any = useGetData("users/1/folders") || {};
  const [selectedFolderId, setSelectedFolderId] = useState<string>("");
  const { data: folderDatas }: any =
    useGetData(`users/1/links?folderId=${selectedFolderId}`) || {};
  const { searchValue, handleChange, handleCloseClick, result }: any =
    useSearchLink(folderDatas);

  return (
    <BaseLayout isSticky={false}>
      <FolderLayout
        addLinkForm={<AddLinkForm />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar
            foldersData={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={(id: string) => setSelectedFolderId(id)}
          />
        }
        cardList={
          folderDatas && folderDatas.length > 0 ? (
            <CardList linksData={result} folder={true} />
          ) : (
            <NoLink />
          )
        }
      />
    </BaseLayout>
  );
};

export default FolderPage;
