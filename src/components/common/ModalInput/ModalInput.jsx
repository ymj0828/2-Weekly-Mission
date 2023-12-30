import styles from "./ModalInput.module.css";
import classNames from "classnames/bind";
import ModalLayout from "../ModalLayout/ModalLayout";

const cx = classNames.bind(styles);

const ModalInput = ({ isOpen, onCloseClick, title, buttonText }) => {
  return (
    <ModalLayout isOpen={isOpen} onCloseClick={onCloseClick} title={title}>
      <input className={cx("input")} type="text" placeholder="내용 입력" />
      <button className={cx("button")}>{buttonText}</button>
    </ModalLayout>
  );
};

export default ModalInput;
