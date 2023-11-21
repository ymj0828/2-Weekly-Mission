const INPUT_ALERT_CLASSNAME = "alert";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

export const Input_Err_Message = {
  emailNull: "이메일을 입력해주세요.",
  emailInvalid: "올바른 이메일 주소가 아닙니다.",
  emailExisting: "이미 사용 중인 이메일입니다.",
  emailNotRegistered: "이메일을 확인해주세요.",
  passwordNull: "비밀번호를 입력해주세요.",
  passwordInvalid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordNotMatch: "비밀번호가 일치하지 않아요.",
  passwordNotRegistered: "비밀번호를 확인해주세요.",
};

export function setInputAlert(elements, message) {
  elements.input.classList.add(INPUT_ALERT_CLASSNAME);
  elements.errorAlert.textContent = message;
}

export function removeInputAlert(elements) {
  elements.input.classList.remove(INPUT_ALERT_CLASSNAME);
  elements.errorAlert.textContent = "";
}

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function isPasswordValid(password) {
  return new RegExp(PASSWORD_REGEX).test(password);
}

export function toggleVisiblePassword(input, icon) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    icon.setAttribute("src", "./img/icon/eye_on_icon.svg");
    icon.setAttribute("alt", "현재 비밀번호가 보이는 상태 아이콘");
    return;
  }
  input.setAttribute("type", "password");
  icon.setAttribute("src", "./img/icon/eye_off_icon.svg");
  icon.setAttribute("alt", "현재 비밀번호가 보이지 않는 상태 아이콘");
}

export function redirectIfAccessTokenExists() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    location.href = "./folder.html";
  }
}
