import Header from "../components/Header/Header";
import LinkList from "../components/LinkList/LinkList";
import Footer from "../components/Footer/Footer";
import AddLinkForm from "../components/AddLinkForm/AddLinkForm";
import FolderInfo from "../components/FolderInfo/FolderInfo";

const FolderPage = () => {
  return (
    <>
      <Header />
      <FolderInfo />
      <AddLinkForm />
      <LinkList />
      <Footer />
    </>
  );
};

export default FolderPage;
