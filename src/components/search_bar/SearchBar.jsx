import serchIcon from "../../assets/search.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form>
      <img className="search-icon" src={serchIcon} alt="검색 아이콘" />
      <input
        className="search-input"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
};
export default SearchBar;
