import styles from "./AddFolderButton.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconAdd } from "../../assets/icon/icon-add.svg";

const cx = classNames.bind(styles);

const AddFolderButton = () => {
  return (
    <button className={cx("button")}>
      <span className={cx("button-text")}>폴더 추가</span>
      <IconAdd className={cx("icon")} alt="폴더 추가 아이콘" />
    </button>
  );
};

export default AddFolderButton;
