import {
  Input_Err_Message,
  setInputAlert,
  removeInputAlert,
  isEmailValid,
  toggleVisiblePassword,
  redirectIfAccessTokenExists,
} from "./sign_module.js";

redirectIfAccessTokenExists();

const emailInput = document.querySelector("#email");
const emailAlert = document.querySelector("#email-alert");

emailInput.addEventListener("focusout", (e) => {
  emailInputFocusOut(e.target.value);
});

function emailInputFocusOut(inputValue) {
  if (inputValue === "") {
    setInputAlert(
      { input: emailInput, errorAlert: emailAlert },
      Input_Err_Message.emailNull
    );
    return;
  }
  if (!isEmailValid(inputValue)) {
    setInputAlert(
      { input: emailInput, errorAlert: emailAlert },
      Input_Err_Message.emailInvalid
    );
    return;
  }
  removeInputAlert({ input: emailInput, errorAlert: emailAlert });
}

const passwordInput = document.querySelector("#password");
const passwordAlert = document.querySelector("#password-alert");

passwordInput.addEventListener("focusout", (e) => {
  passwordInputFocusOut(e.target.value);
});

function passwordInputFocusOut(inputValue) {
  if (inputValue === "") {
    setInputAlert(
      { input: passwordInput, errorAlert: passwordAlert },
      Input_Err_Message.passwordNull
    );
    return;
  }
  removeInputAlert({ input: passwordInput, errorAlert: passwordAlert });
}

const visiblePasswordIcon = document.querySelector("#password-toggle");

visiblePasswordIcon.addEventListener("click", () =>
  toggleVisiblePassword(passwordInput, visiblePasswordIcon)
);

const form = document.querySelector("form");

form.addEventListener("submit", submitForm);

async function submitForm(e) {
  e.preventDefault();

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    if (!response.ok) {
      throw Error();
    }

    const { data } = await response.json();
    const accessToken = data.accessToken;

    localStorage.setItem("accessToken", accessToken);
    location.href = "./folder.html";
  } catch {
    setInputAlert(
      { input: emailInput, errorAlert: emailAlert },
      Input_Err_Message.emailNotRegistered
    );
    setInputAlert(
      { input: passwordInput, errorAlert: passwordAlert },
      Input_Err_Message.passwordNotRegistered
    );
  }
}
