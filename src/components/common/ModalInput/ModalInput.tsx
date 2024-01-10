import styles from "./ModalInput.module.css";
import classNames from "classnames/bind";
import ModalLayout from "@/components/common/ModalLayout/ModalLayout";

const cx = classNames.bind(styles);

type InputModalProps = {
  isOpen: boolean;
  title: string;
  buttonText: string;
  onCloseClick: () => void;
};

const ModalInput = ({
  isOpen,
  title,
  buttonText,
  onCloseClick,
}: InputModalProps) => {
  return (
    <ModalLayout isOpen={isOpen} onCloseClick={onCloseClick} title={title}>
      <input className={cx("input")} type="text" placeholder="내용 입력" />
      <button className={cx("button")}>{buttonText}</button>
    </ModalLayout>
  );
};

export default ModalInput;
