export function toggleVisiblePassword() {
  const visiblePasswordIconParents = document.querySelectorAll(".input-wrap");

  visiblePasswordIconParents.forEach((parentEle) => {
    parentEle.addEventListener("click", (e) => {
      const clickedIcon = e.target;
      if (clickedIcon.matches(".input-wrap > img")) {
        const currentType =
          clickedIcon.previousElementSibling.getAttribute("type");
        const inputType = currentType === "password" ? "text" : "password";
        const imgSrc =
          currentType === "password"
            ? "./img/icon/eye_on_icon.svg"
            : "./img/icon/eye_off_icon.svg";
        const imgAlt =
          currentType === "password"
            ? "현재 비밀번호가 보이는 상태 아이콘"
            : "현재 비밀번호가 보이지 않는 상태 아이콘";

        clickedIcon.previousElementSibling.setAttribute("type", inputType);
        clickedIcon.setAttribute("src", imgSrc);
        clickedIcon.setAttribute("alt", imgAlt);
      }
    });
  });
}

const accessToken = localStorage.getItem("accessToken");

export function isAccessToken() {
  if (accessToken) {
    window.location.href = "./folder.html";
  }
}
