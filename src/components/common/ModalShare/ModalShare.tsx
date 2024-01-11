import styles from "./ModalShare.module.css";
import classNames from "classnames/bind";
import ModalLayout from "@/components/common/ModalLayout/ModalLayout";
import ShareKakao from "@public/images/share-kakao.svg";
import ShareFacebook from "@public/images/share-facebook.svg";
import ShareLink from "@public/images/share-link.svg";

const cx = classNames.bind(styles);

type ShareModalProps = {
  isOpen: boolean;
  title: string;
  shareElement: string;
  onCloseClick: () => void;
  onKakaoClick: () => void;
  onFacebookClick: () => void;
  onLinkCopyClick: () => void;
};

const ModalShare = ({
  isOpen,
  title,
  shareElement,
  onCloseClick,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
}: ShareModalProps) => {
  return (
    <ModalLayout isOpen={isOpen} onCloseClick={onCloseClick} title={title}>
      <p className={cx("share-text")}>{shareElement}</p>
      <div className={cx("button-wrap")}>
        <button onClick={onKakaoClick}>
          <ShareKakao alt="카카오톡 공유 버튼" />
          <p className={cx("button-text")}>카카오톡</p>
        </button>
        <button onClick={onFacebookClick}>
          <ShareFacebook alt="페이스북 공유 버튼" />
          <p className={cx("button-text")}>페이스북</p>
        </button>
        <button onClick={onLinkCopyClick}>
          <ShareLink alt="링크 복사 버튼" />
          <p className={cx("button-text")}>링크 복사</p>
        </button>
      </div>
    </ModalLayout>
  );
};

export default ModalShare;
