import { ChangeEventHandler, MouseEvent, MouseEventHandler } from "react";
import styles from "./SearchBar.module.css";
import classNames from "classnames/bind";
import IconSearch from "@public/images/icon/icon-search.svg";
import IconCloseSearch from "@public/images/icon/icon-close-search.svg";

const cx = classNames.bind(styles);

type SearchBarProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

const SearchBar = ({ value, onChange, onCloseClick }: SearchBarProps) => {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onCloseClick(e);
  };

  return (
    <form className={cx("form")}>
      <IconSearch alt="검색 아이콘" />
      <input
        className={cx("input")}
        type="text"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <button className={cx("close")} onClick={handleButtonClick}>
        <IconCloseSearch alt="입력한 텍스트 지우는 아이콘" />
      </button>
    </form>
  );
};
export default SearchBar;
