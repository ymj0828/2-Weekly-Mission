import { ReactNode } from "react";
import styles from "./BaseLayout.module.css";
import classNames from "classnames/bind";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

const cx = classNames.bind(styles);

type BaseLayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
};

const BaseLayout = ({ children, isSticky = true }: BaseLayoutProps) => {
  return (
    <>
      <Header isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
