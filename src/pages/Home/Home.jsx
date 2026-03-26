import useData from '../../hooks/useData/useData';
import Banner from './Banner/Banner';
import TopAppsSection from './TopAppsSection/TopAppsSection';

const Home = () => {
  const { data, loading } = useData();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="space-y-10">
      <Banner />
      <TopAppsSection data={data} />
    </div>
  );
};

export default Home;
