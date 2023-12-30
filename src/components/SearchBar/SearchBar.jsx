import styles from "./SearchBar.module.css";
import classNames from "classnames/bind";
import iconSearch from "../../assets/icon/icon-search.svg";

const cx = classNames.bind(styles);

const SearchBar = () => {
  return (
    <form className={cx("form")}>
      <img src={iconSearch} alt="검색 아이콘" />
      <input
        className={cx("input")}
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
};
export default SearchBar;
