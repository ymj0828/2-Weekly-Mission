export function toggleVisiblePassword() {
  const visiblePasswordIcon = document.querySelectorAll(".input-wrap > img");

  visiblePasswordIcon.forEach((iconEle) => {
    iconEle.addEventListener("click", () => {
      const currentType = iconEle.previousElementSibling.getAttribute("type");
      const inputType = currentType === "password" ? "text" : "password";
      const imgSrc =
        currentType === "password"
          ? "./img/icon/eye_on_icon.svg"
          : "./img/icon/eye_off_icon.svg";
      const imgAlt =
        currentType === "password"
          ? "현재 비밀번호가 보이는 상태 아이콘"
          : "현재 비밀번호가 보이지 않는 상태 아이콘";

      iconEle.previousElementSibling.setAttribute("type", inputType);
      iconEle.setAttribute("src", imgSrc);
      iconEle.setAttribute("alt", imgAlt);
    });
  });
}
