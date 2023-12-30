import styles from "./ModalShare.module.css";
import classNames from "classnames/bind";
import ModalLayout from "../ModalLayout/ModalLayout";
import shareKakao from "../../../assets/share-kakao.svg";
import shareFacebook from "../../../assets/share-facebook.svg";
import shareLink from "../../../assets/share-link.svg";

const cx = classNames.bind(styles);

const ModalShare = ({
  isOpen,
  onCloseClick,
  title,
  shareElement,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
}) => {
  return (
    <ModalLayout isOpen={isOpen} onCloseClick={onCloseClick} title={title}>
      <p className={cx("share-text")}>{shareElement}</p>
      <div className={cx("button-wrap")}>
        <button onClick={onKakaoClick}>
          <img src={shareKakao} alt="카카오톡 공유 버튼" />
          <p className={cx("button-text")}>카카오톡</p>
        </button>
        <button onClick={onFacebookClick}>
          <img src={shareFacebook} alt="페이스북 공유 버튼" />
          <p className={cx("button-text")}>페이스북</p>
        </button>
        <button onClick={onLinkCopyClick}>
          <img src={shareLink} alt="링크 복사 버튼" />
          <p className={cx("button-text")}>링크 복사</p>
        </button>
      </div>
    </ModalLayout>
  );
};

export default ModalShare;
