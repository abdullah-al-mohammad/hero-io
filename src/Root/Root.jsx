import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';

const Root = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto mb-40 mt-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
