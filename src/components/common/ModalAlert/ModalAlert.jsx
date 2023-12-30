import styles from "./ModalAlert.module.css";
import classNames from "classnames/bind";
import ModalLayout from "../ModalLayout/ModalLayout";

const cx = classNames.bind(styles);

const ModalAlert = ({
  isOpen,
  onCloseClick,
  title,
  buttonText,
  deleteElement,
}) => {
  return (
    <ModalLayout isOpen={isOpen} onCloseClick={onCloseClick} title={title}>
      <p className={cx("text")}>{deleteElement}</p>
      <button className={cx("button")}>{buttonText}</button>
    </ModalLayout>
  );
};

export default ModalAlert;
