import CardList from "../Card/CardList";
import FolderCategoryTabList from "../FolderCategory/FolderCategory";
import SearchBar from "../SearchBar/SearchBar";
import "./LinkList.css";

const LinkList = () => {
  return (
    <div className="link-list-wrap">
      <SearchBar />
      <FolderCategoryTabList />
      <CardList />
    </div>
  );
};
export default LinkList;
