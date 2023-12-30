import styles from "./Profile.module.css";
import classNames from "classnames/bind";
import useGetData from "../../../util/useGetData";

const cx = classNames.bind(styles);

const Profile = () => {
  const { email, profileImageSource } = useGetData("sample/user") || {};

  return (
    <>
      {email ? (
        <div className={cx("profile-wrap")}>
          <img
            className={cx("profile-image")}
            src={profileImageSource}
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
