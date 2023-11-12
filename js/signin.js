import { toggleVisiblePassword } from "./sign_module.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("form");

const inputErrMessage = {
  emailNull: "이메일을 입력해주세요.",
  emailNotRegistered: "이메일을 확인해주세요.",
  passwordNull: "비밀번호를 입력해주세요.",
  passwordNotRegistered: "비밀번호를 확인해주세요.",
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
  }
}

function passwordInputFocusOut(ele) {
  ele.classList.remove("alert");
  passwordInput.parentElement.nextElementSibling.textContent = "";
  passwordInput.dataset.boolean = 1;
  if (ele.value === "") {
    focusOutAlert(ele, inputErrMessage.passwordNull);
  }
}

emailInput.addEventListener("focusout", (e) => {
  emailInputFocusOut(e.target);
});

passwordInput.addEventListener("focusout", (e) => {
  passwordInputFocusOut(e.target);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailInputFocusOut(emailInput);
  passwordInputFocusOut(passwordInput);

  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    window.location.href = "./folder.html";
  } else {
    focusOutAlert(emailInput, inputErrMessage.emailNotRegistered);
    focusOutAlert(passwordInput, inputErrMessage.passwordNotRegistered);
  }
});

toggleVisiblePassword();
