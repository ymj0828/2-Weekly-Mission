import styles from "./AddLinkForm.module.css";
import classNames from "classnames/bind";
import iconLink from "../../assets/icon/icon-link.svg";

const cx = classNames.bind(styles);

const AddLinkForm = () => {
  return (
    <div className={cx("container")}>
      <form className={cx("form")}>
        <img className={cx("icon")} src={iconLink} alt="링크 추가하기 아이콘" />
        <input
          className={cx("input")}
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <button className={cx("button")}>추가하기</button>
      </form>
    </div>
  );
};
export default AddLinkForm;
