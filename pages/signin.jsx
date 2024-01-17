import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Input_Error_Message,
  setInputAlert,
  removeInputAlert,
  isEmailValid,
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
  });

  function emailInputFocusOut(inputValue, setIsAlert, setErrorMessage) {
    if (inputValue === "") {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.emailNull,
      });
      return;
    }
    if (!isEmailValid(inputValue)) {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.emailInvalid,
      });
      return;
    }
    removeInputAlert(setIsAlert, setErrorMessage);
  }

  function passwordInputFocusOut(inputValue, setIsAlert, setErrorMessage) {
    if (inputValue === "") {
      setInputAlert(setIsAlert, {
        setErrorMessage,
        message: Input_Error_Message.passwordNull,
      });
      return;
    }
    removeInputAlert(setIsAlert, setErrorMessage);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await usePostAuth("sign-in", {
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
          onFocusOut={emailInputFocusOut}
          setInputValueParent={setInputValueParent}
        />,
        <SignInput
          id={"password"}
          label={"비밀번호"}
          type={"password"}
          placeholder={"비밀번호를 입력해 주세요"}
          onFocusOut={passwordInputFocusOut}
          setInputValueParent={setInputValueParent}
        />,
      ]}
      button={<SignButton text={"로그인"} />}
      auth={<SocialAuth text={"소셜 로그인"} />}
    />
  );
};

export default SharedPage;
