import "./NotFoundPage.scss";
import MainLayout from "../../layouts/MainLayout";

const NotFoundPage: React.FC = () => {
  return (
    <MainLayout>
      <span className="main__page-doesnt-exist">Page doesn&apos;t exist</span>
    </MainLayout>
  );
};

export default NotFoundPage;
