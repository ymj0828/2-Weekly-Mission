import {
  TEST_USER,
  Input_Err_Message,
  setInputAlert,
  removeInputAlert,
  isEmailValid,
  isPasswordValid,
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
    return false;
  }
  if (!isEmailValid(inputValue)) {
    setInputAlert(
      { input: emailInput, errorAlert: emailAlert },
      Input_Err_Message.emailInvalid
    );
    return false;
  }
  if (inputValue === TEST_USER.email) {
    setInputAlert(
      { input: emailInput, errorAlert: emailAlert },
      Input_Err_Message.emailExisting
    );
    return false;
  }
  removeInputAlert({ input: emailInput, errorAlert: emailAlert });
  return true;
}

const passwordInput = document.querySelector("#password");
const passwordAlert = document.querySelector("#password-alert");

passwordInput.addEventListener("focusout", (e) => {
  passwordInputFocusOut(e.target.value);
});

function passwordInputFocusOut(inputValue) {
  if (inputValue === "" || !isPasswordValid(inputValue)) {
    setInputAlert(
      { input: passwordInput, errorAlert: passwordAlert },
      Input_Err_Message.passwordInvalid
    );
    return false;
  }
  removeInputAlert({ input: passwordInput, errorAlert: passwordAlert });
  return true;
}

const passwordCheckInput = document.querySelector("#password-check");
const passwordCheckAlert = document.querySelector("#password-check-alert");

passwordCheckInput.addEventListener("focusout", (e) => {
  passwordCheckInputFocusOut(e.target.value);
});

function passwordCheckInputFocusOut(inputValue) {
  if (inputValue === "" || !isPasswordValid(inputValue)) {
    setInputAlert(
      { input: passwordCheckInput, errorAlert: passwordCheckAlert },
      Input_Err_Message.passwordInvalid
    );
    return false;
  }
  if (passwordInput.value !== inputValue) {
    setInputError(
      { input: passwordCheckInput, errorAlert: passwordCheckAlert },
      Input_Err_Message.passwordNotMatch
    );
    return false;
  }
  removeInputAlert({
    input: passwordCheckInput,
    errorAlert: passwordCheckAlert,
  });
  return true;
}

const visiblePasswordIcon = document.querySelector("#password-toggle");

visiblePasswordIcon.addEventListener("click", () =>
  toggleVisiblePassword(passwordInput, visiblePasswordIcon)
);

const visiblePasswordCheckIcon = document.querySelector(
  "#password-check-toggle"
);

visiblePasswordCheckIcon.addEventListener("click", () =>
  toggleVisiblePassword(passwordCheckInput, visiblePasswordCheckIcon)
);

const form = document.querySelector("form");

form.addEventListener("submit", submitForm);

async function submitForm(e) {
  e.preventDefault();

  try {
    const isEmailInputValid = emailInputFocusOut(emailInput.value);
    const isPasswordInputValid = passwordInputFocusOut(passwordInput.value);
    const isConfirmPasswordInputValid = passwordCheckInputFocusOut(
      passwordCheckInput.value
    );

    if (
      isEmailInputValid &&
      isPasswordInputValid &&
      isConfirmPasswordInputValid
    ) {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
          }),
        }
      );

      if (!response.ok) {
        throw Error();
      }

      const { data } = await response.json();
      const accessToken = data.accessToken;

      localStorage.setItem("accessToken", accessToken);
      location.href = "./folder.html";
    }
  } catch {
    setInputAlert(
      { input: emailInput, errorAlert: emailAlert },
      Input_Err_Message.emailExisting
    );
  }
}
