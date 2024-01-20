const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

export const INPUT_ERROR_MESSAGE = {
  emailNull: "이메일을 입력해주세요.",
  emailInvalid: "올바른 이메일 주소가 아닙니다.",
  emailExisting: "이미 사용 중인 이메일입니다.",
  emailNotRegistered: "이메일을 확인해주세요.",
  passwordNull: "비밀번호를 입력해주세요.",
  passwordInvalid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordNotMatch: "비밀번호가 일치하지 않아요.",
  passwordNotRegistered: "비밀번호를 확인해주세요.",
};

export function setInputAlert(setIsAlert, { setErrorMessage, message }) {
  if (!setIsAlert && !{ setErrorMessage, message }) {
    return;
  }
  setIsAlert(true);
  setErrorMessage(message);
}

export function removeInputAlert(setIsAlert, setErrorMessage) {
  if (!setIsAlert && !setErrorMessage) {
    return;
  }
  setIsAlert(false);
  setErrorMessage("");
}

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function isPasswordValid(password) {
  return new RegExp(PASSWORD_REGEX).test(password);
}
