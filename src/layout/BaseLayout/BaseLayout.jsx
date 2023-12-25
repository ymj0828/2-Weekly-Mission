import styles from "./BaseLayout.module.css";
import classNames from "classnames/bind";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const cx = classNames.bind(styles);

const BaseLayout = ({ children, isSticky = true }) => {
  return (
    <>
      <Header isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
