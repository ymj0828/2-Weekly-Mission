import { MouseEvent, ReactNode } from "react";
import styles from "./ModalLayout.module.css";
import classNames from "classnames/bind";
import Portal from "@/components/common/Portal/Portal";
import IconClose from "@public/images/icon/icon-close.svg";

const cx = classNames.bind(styles);

type ModalLayoutProps = {
  children: ReactNode;
  isOpen?: boolean;
  title: string;
  onCloseClick: () => void;
};

const ModalLayout = ({
  children,
  isOpen = false,
  title,
  onCloseClick,
}: ModalLayoutProps) => {
  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
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
            <IconClose className={cx("icon-close")} alt="닫기 버튼" />
          </button>
          <p className={cx("title")}>{title}</p>
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default ModalLayout;
