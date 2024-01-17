import { useState } from "react";
import styles from "./SignInput.module.css";
import classNames from "classnames/bind";
import IconEyeOn from "@public/images/icon/icon-eye-on.svg";
import IconEyeOff from "@public/images/icon/icon-eye-off.svg";

const cx = classNames.bind(styles);

const SignInput = ({
  id,
  label,
  type,
  placeholder,
  onFocusOut,
  setInputValueParent,
}: any) => {
  const [isVisibleIcon, setIsVisibleIcon] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    setInputValueParent((prev: any) => ({ ...prev, [id]: e.target.value }));
  };

  const handleInputFocusOut = () => {
    onFocusOut(inputValue, setIsAlert, setErrorMessage);
  };

  const handleIconClick = () => {
    setIsVisibleIcon((prev) => !prev);
  };

  return (
    <div className={cx("container")}>
      <label className={cx("label")} htmlFor={id}>
        {label}
      </label>
      <div className={cx("input-wrap")}>
        <input
          className={cx("input", { alert: isAlert })}
          value={inputValue}
          type={type === "password" && isVisibleIcon ? "text" : type}
          id={id}
          placeholder={placeholder}
          onChange={handleInputChange}
          onBlur={handleInputFocusOut}
        />
        {type === "password" && (
          <button
            className={cx("button")}
            type="button"
            onClick={handleIconClick}
          >
            {isVisibleIcon ? (
              <IconEyeOn alt="현재 비밀번호가 보이는 상태 아이콘" />
            ) : (
              <IconEyeOff alt="현재 비밀번호가 보이지 않는 상태 아이콘" />
            )}
          </button>
        )}
      </div>
      <span className={cx("message")}>{errorMessage}</span>
    </div>
  );
};

export default SignInput;
