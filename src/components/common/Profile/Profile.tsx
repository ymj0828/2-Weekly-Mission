import styles from "./Profile.module.css";
import classNames from "classnames/bind";
import useGetData from "@/util/useGetData";
import Image from "next/image";

const cx = classNames.bind(styles);

const Profile = () => {
  const { email, profileImageSource }: any = useGetData("sample/user") || {};

  return (
    <>
      {email ? (
        <div className={cx("profile-wrap")}>
          <Image
            className={cx("profile-image")}
            src={profileImageSource}
            width={28}
            height={28}
            alt="프로필 사진"
          />
          <span className={cx("profile-email")}>{email}</span>
        </div>
      ) : (
        <a href="signin.html" className={cx("login-button")}>
          로그인
        </a>
      )}
    </>
  );
};

export default Profile;
