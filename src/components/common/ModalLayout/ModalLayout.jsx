import styles from "./ModalLayout.module.css";
import classNames from "classnames/bind";
import iconClose from "../../../assets/icon/icon-close.svg";
import Portal from "../Portal/Portal";

const cx = classNames.bind(styles);

const ModalLayout = ({ children, isOpen = false, onCloseClick, title }) => {
  const handleClickOutside = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (onCloseClick) {
      onCloseClick();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={cx("background")} onClick={handleClickOutside}>
        <div className={cx("container")}>
          <button className={cx("close-button")} onClick={onCloseClick}>
            <img className={cx("icon-close")} src={iconClose} alt="닫기 버튼" />
          </button>
          <p className={cx("title")}>{title}</p>
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default ModalLayout;
