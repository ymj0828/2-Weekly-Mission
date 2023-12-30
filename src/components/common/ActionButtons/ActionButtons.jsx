import styles from "./ActionButtons.module.css";
import classNames from "classnames/bind";
import iconShare from "../../../assets/icon/icon-share.svg";
import iconEdit from "../../../assets/icon/icon-edit.svg";
import iconDelete from "../../../assets/icon/icon-delete.svg";

const cx = classNames.bind(styles);

const ActionButtons = ({ setOpenModal }) => {
  return (
    <ul className={cx("button-list")}>
      <li className={cx("button-list-item")}>
        <button className={cx("button")} onClick={() => setOpenModal("share")}>
          <img src={iconShare} alt="공유 아이콘" />
          공유
        </button>
      </li>
      <li className={cx("button-list-item")}>
        <button className={cx("button")} onClick={() => setOpenModal("rename")}>
          <img src={iconEdit} alt="이름 변경 아이콘" />
          이름 변경
        </button>
      </li>
      <li className={cx("button-list-item")}>
        <button className={cx("button")} onClick={() => setOpenModal("delete")}>
          <img src={iconDelete} alt="삭제 아이콘" />
          삭제
        </button>
      </li>
    </ul>
  );
};

export default ActionButtons;
