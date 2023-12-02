import CardList from "../Card/CardList";
import SearchBar from "../SearchBar/SearchBar";
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
