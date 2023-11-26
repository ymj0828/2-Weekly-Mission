import CardList from "../card/CardList";
import SearchBar from "../search_bar/SearchBar";
import "./LinkList.css";

const LinkList = () => {
  return (
    <div className="link-list-wrap">
      <SearchBar />
      <CardList />
    </div>
  );
};
export default LinkList;
