import Layout from "./Layout";
import Header from "./parts/Header";
import Content from './parts/Content';
import Footer from './parts/Footer';
import LeftSide from "./parts/LeftSide";
import RightSide from "./parts/RightSide";

const LayoutApp = () => {
  return (
    <Layout layout="grail">
      <Header />
      <LeftSide />
      <Content />
      <RightSide />
      <Footer />
    </Layout>
  );
};

export default LayoutApp;
