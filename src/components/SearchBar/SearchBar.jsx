import styles from "./SearchBar.module.css";
import classNames from "classnames/bind";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconCloseSearch from "../../assets/icon/icon-close-search.svg";

const cx = classNames.bind(styles);

const SearchBar = ({ value, onChange, onCloseClick }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    onCloseClick();
  };

  return (
    <form className={cx("form")}>
      <img src={iconSearch} alt="검색 아이콘" />
      <input
        className={cx("input")}
        type="text"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <button className={cx("close")} onClick={handleButtonClick}>
        <img src={iconCloseSearch} alt="입력한 텍스트 지우는 아이콘" />
      </button>
    </form>
  );
};
export default SearchBar;
