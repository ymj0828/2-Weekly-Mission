import styles from "./ActionButtons.module.css";
import classNames from "classnames/bind";
import IconShare from "@public/images/icon/icon-share.svg";
import IconEdit from "@public/images/icon/icon-edit.svg";
import IconDelete from "@public/images/icon/icon-delete.svg";

const cx = classNames.bind(styles);

type ActionButtonsProps = {
  setOpenModal: (value: string | null) => void;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({ setOpenModal }) => {
  return (
    <ul className={cx("button-list")}>
      <li className={cx("button-list-item")}>
        <button className={cx("button")} onClick={() => setOpenModal("share")}>
          <IconShare alt="공유 아이콘" />
          공유
        </button>
      </li>
      <li className={cx("button-list-item")}>
        <button className={cx("button")} onClick={() => setOpenModal("rename")}>
          <IconEdit alt="이름 변경 아이콘" />
          이름 변경
        </button>
      </li>
      <li className={cx("button-list-item")}>
        <button className={cx("button")} onClick={() => setOpenModal("delete")}>
          <IconDelete alt="삭제 아이콘" />
          삭제
        </button>
      </li>
    </ul>
  );
};

export default ActionButtons;
