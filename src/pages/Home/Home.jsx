import useData from '../../hooks/useData/useData';
import Banner from './Banner/Banner';
import TopAppsSection from './TopAppsSection/TopAppsSection';

// const heroDataPromise = fetch('./data.json').then(res => res.json());
const Home = () => {
  const data = useData();
  return (
    <div className="space-y-10">
      <Banner />
      <TopAppsSection heroDataPromise={data} />
    </div>
  );
};

export default Home;
