import styles from "./SignLayout.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignLayout = ({ header, input, button, auth, onSubmit }) => {
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        {header}
        <form className={cx("form")} onSubmit={onSubmit}>
          {input}
          {button}
        </form>
        {auth}
      </div>
    </div>
  );
};

export default SignLayout;
