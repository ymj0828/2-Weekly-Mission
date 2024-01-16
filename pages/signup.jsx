import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  TEST_USER,
  Input_Error_Message,
  setInputAlert,
  removeInputAlert,
  isEmailValid,
  isPasswordValid,
} from "@/util/getAuth";
import { usePostAuth } from "@/util/usePostAuth";
import SignLayout from "@/layout/SignLayout/SignLayout";
import SignHeader from "@/components/auth/SignHeader/SignHeader";
import SignInput from "@/components/auth/SignInput/SignInput";
import SignButton from "@/components/auth/SignButton/SignButton";
import SocialAuth from "@/components/auth/SocialAuth/SocialAuth";

const SharedPage = () => {
  const router = useRouter();
  const [inputValueParent, setInputValueParent] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  function emailInputFocusOut(inputValue, setIsAlert, setErrorMessage) {
    if (inputValue === "") {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.emailNull,
      });
      return false;
    }
    if (!isEmailValid(inputValue)) {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.emailInvalid,
      });
      return false;
    }
    if (inputValue === TEST_USER.email) {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.emailExisting,
      });
      return false;
    }
    removeInputAlert(setIsAlert, setErrorMessage);
    return true;
  }

  function passwordInputFocusOut(inputValue, setIsAlert, setErrorMessage) {
    if (inputValue === "" || !isPasswordValid(inputValue)) {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.passwordInvalid,
      });
      return false;
    }
    removeInputAlert(setIsAlert, setErrorMessage);
    return true;
  }

  function passwordCheckInputFocusOut(inputValue, setIsAlert, setErrorMessage) {
    if (inputValue === "" || !isPasswordValid(inputValue)) {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.passwordInvalid,
      });
      return false;
    }
    if (inputValueParent.password !== inputValue) {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.passwordNotMatch,
      });
      return false;
    }
    removeInputAlert(setIsAlert, setErrorMessage);
    return true;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const isEmailInputValid = emailInputFocusOut(inputValueParent.email);
      const isPasswordInputValid = passwordInputFocusOut(
        inputValueParent.password
      );
      const isConfirmPasswordInputValid = passwordCheckInputFocusOut(
        inputValueParent.passwordCheck
      );

      if (
        isEmailInputValid &&
        isPasswordInputValid &&
        isConfirmPasswordInputValid
      ) {
        const response = await usePostAuth("sign-up", {
          email: inputValueParent.email,
          password: inputValueParent.password,
        });

        const accessToken = response.accessToken;

        localStorage.setItem("accessToken", accessToken);
        router.replace("/folder");
      }
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
          text={"이미 회원이신가요? "}
          linkText={"로그인 하기"}
          href={"/signin"}
        />
      }
      onSubmit={handleFormSubmit}
      input={[
        <SignInput
          id={"email"}
          label={"이메일"}
          type={"email"}
          placeholder={"이메일을 입력해 주세요"}
          onFocusOut={emailInputFocusOut}
          setInputValueParent={setInputValueParent}
        />,
        <SignInput
          id={"password"}
          label={"비밀번호"}
          type={"password"}
          placeholder={"영문, 숫자를 조합해 8자 이상 입력해 주세요"}
          onFocusOut={passwordInputFocusOut}
          setInputValueParent={setInputValueParent}
        />,
        <SignInput
          id={"passwordCheck"}
          label={"비밀번호 확인"}
          type={"password"}
          placeholder={"비밀번호와 일치하는 값을 입력해 주세요"}
          onFocusOut={passwordCheckInputFocusOut}
          setInputValueParent={setInputValueParent}
        />,
      ]}
      button={<SignButton text={"회원 가입"} />}
      auth={<SocialAuth text={"다른 방식으로 가입하기"} />}
    />
  );
};

export default SharedPage;
