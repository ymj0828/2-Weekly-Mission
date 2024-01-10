import { MouseEventHandler } from "react";
import styles from "./AddFolderButton.module.css";
import classNames from "classnames/bind";
import IconAdd from "@public/images/icon/icon-add.svg";

const cx = classNames.bind(styles);

type AddFolderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("button")} onClick={onClick}>
      <span className={cx("button-text")}>폴더 추가</span>
      <IconAdd className={cx("icon")} alt="폴더 추가 아이콘" />
    </button>
  );
};

export default AddFolderButton;
