import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  INPUT_ERROR_MESSAGE,
  setInputAlert,
  removeInputAlert,
  isEmailValid,
} from "@/util/getAuth";
import { postSignRequest } from "@/util/postSignRequest";
import SignLayout from "@/layout/SignLayout/SignLayout";
import SignHeader from "@/components/auth/SignHeader/SignHeader";
import SignInput from "@/components/auth/SignInput/SignInput";
import SignButton from "@/components/auth/SignButton/SignButton";
import SocialAuth from "@/components/auth/SocialAuth/SocialAuth";

const SigninPage = () => {
  const router = useRouter();
  const [inputValueParent, setInputValueParent] = useState({
    email: "",
    password: "",
  });

  const handleEmailInputFocusOut = (
    inputValue,
    setIsAlert,
    setErrorMessage
  ) => {
    if (inputValue === "") {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: INPUT_ERROR_MESSAGE.emailNull,
      });
      return;
    }
    if (!isEmailValid(inputValue)) {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: INPUT_ERROR_MESSAGE.emailInvalid,
      });
      return;
    }
    removeInputAlert(setIsAlert, setErrorMessage);
  };

  const handlePasswordInputFocusOut = (
    inputValue,
    setIsAlert,
    setErrorMessage
  ) => {
    if (inputValue === "") {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: INPUT_ERROR_MESSAGE.passwordNull,
      });
      return;
    }
    removeInputAlert(setIsAlert, setErrorMessage);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postSignRequest("sign-in", {
        email: inputValueParent.email,
        password: inputValueParent.password,
      });

      const accessToken = response.accessToken;

      localStorage.setItem("accessToken", accessToken);
      router.replace("/folder");
    } catch {}
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;
    router.replace("/folder");
  }, []);

  return (
    <SignLayout
      header={
        <SignHeader
          text={"회원이 아니신가요? "}
          linkText={"회원 가입하기"}
          href={"/signup"}
        />
      }
      onSubmit={handleFormSubmit}
      input={[
        <SignInput
          id={"email"}
          label={"이메일"}
          type={"email"}
          placeholder={"이메일을 입력해 주세요"}
          onFocusOut={handleEmailInputFocusOut}
          setInputValueParent={setInputValueParent}
        />,
        <SignInput
          id={"password"}
          label={"비밀번호"}
          type={"password"}
          placeholder={"비밀번호를 입력해 주세요"}
          onFocusOut={handlePasswordInputFocusOut}
          setInputValueParent={setInputValueParent}
        />,
      ]}
      button={<SignButton text={"로그인"} />}
      auth={<SocialAuth text={"소셜 로그인"} />}
    />
  );
};

export default SigninPage;
