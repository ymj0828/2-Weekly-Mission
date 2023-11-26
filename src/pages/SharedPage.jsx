import Header from "../components/header/Header";
import FolderInfo from "../components/folder_info/FolderInfo";
import LinkList from "../components/link_list/LinkList";
import Footer from "../components/footer/Footer";

const SharedPage = () => {
  return (
    <>
      <Header />
      <FolderInfo />
      <LinkList />
      <Footer />
    </>
  );
};

export default SharedPage;
