import logo from "../../assets/logo.svg";
import getUser from "../../api/getUser";
import { useState, useEffect } from "react";
import "./Header.css";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Linkbrary 로고" />
    </a>
  );
};

const Profile = () => {
  const [userData, setUserData] = useState({});

  const handleLoadUserData = async () => {
    const { email, profileImageSource } = await getUser();
    setUserData({
      email,
      profileImageSource,
    });
  };

  useEffect(() => {
    handleLoadUserData();
  }, []);

  const { email, profileImageSource } = userData;

  return (
    <>
      {email ? (
        <div className="profile-wrap">
          <img src={profileImageSource} alt="프로필 사진" />
          <span>{email}</span>
        </div>
      ) : (
        <a href="signin.html" className="login-button">
          로그인
        </a>
      )}
    </>
  );
};

const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <Logo />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
