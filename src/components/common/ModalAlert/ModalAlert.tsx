import styles from "./ModalAlert.module.css";
import classNames from "classnames/bind";
import ModalLayout from "@/components/common/ModalLayout/ModalLayout";

const cx = classNames.bind(styles);

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  deleteElement: string;
  buttonText: string;
  onCloseClick: () => void;
};

const ModalAlert = ({
  isOpen,
  title,
  deleteElement,
  buttonText,
  onCloseClick,
}: AlertModalProps) => {
  return (
    <ModalLayout isOpen={isOpen} onCloseClick={onCloseClick} title={title}>
      <p className={cx("text")}>{deleteElement}</p>
      <button className={cx("button")}>{buttonText}</button>
    </ModalLayout>
  );
};

export default ModalAlert;
