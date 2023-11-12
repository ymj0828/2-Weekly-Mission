import { toggleVisiblePassword } from "./sign_module.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password-check");
const form = document.querySelector("form");
const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/);

const inputErrMessage = {
  emailNull: "이메일을 입력해주세요.",
  emailInvalid: "올바른 이메일 주소가 아닙니다.",
  emailExisting: "이미 사용 중인 이메일입니다.",
  passwordInvalid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordNull: "비밀번호를 입력해주세요.",
  passwordNotMatch: "비밀번호가 일치하지 않아요.",
};

function focusOutAlert(ele, message) {
  ele.classList.add("alert");
  ele.parentElement.nextElementSibling.textContent = message;
  ele.dataset.boolean = 0;
}

function emailInputFocusOut(ele) {
  ele.classList.remove("alert");
  emailInput.parentElement.nextElementSibling.textContent = "";
  emailInput.dataset.boolean = 1;
  if (ele.value === "") {
    focusOutAlert(ele, inputErrMessage.emailNull);
  } else if (!emailRegex.test(ele.value)) {
    focusOutAlert(ele, inputErrMessage.emailInvalid);
  } else if (ele.value === "test@codeit.com") {
    focusOutAlert(ele, inputErrMessage.emailExisting);
  }
}

function passwordInputFocusOut(ele) {
  ele.classList.remove("alert");
  passwordInput.parentElement.nextElementSibling.textContent = "";
  passwordInput.dataset.boolean = 1;
  if (ele.value === "") {
    focusOutAlert(ele, inputErrMessage.passwordNull);
  } else if (!passwordRegex.test(ele.value)) {
    focusOutAlert(ele, inputErrMessage.passwordInvalid);
  }
}

function passwordCheckInputFocusOut(ele) {
  ele.classList.remove("alert");
  passwordCheckInput.parentElement.nextElementSibling.textContent = "";
  passwordCheckInput.dataset.boolean = 1;
  if (ele.value !== passwordInput.value) {
    focusOutAlert(ele, inputErrMessage.passwordNotMatch);
  }
}

emailInput.addEventListener("focusout", (e) => {
  emailInputFocusOut(e.target);
});

passwordInput.addEventListener("focusout", (e) => {
  passwordInputFocusOut(e.target);
});

passwordCheckInput.addEventListener("focusout", (e) => {
  passwordCheckInputFocusOut(e.target);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailInputFocusOut(emailInput);
  passwordInputFocusOut(passwordInput);
  passwordCheckInputFocusOut(passwordCheckInput);

  if (
    Boolean(Number(emailInput.dataset.boolean)) &&
    Boolean(Number(passwordInput.dataset.boolean)) &&
    Boolean(Number(passwordCheckInput.dataset.boolean))
  ) {
    window.location.href = "./folder.html";
  }
});

toggleVisiblePassword();
