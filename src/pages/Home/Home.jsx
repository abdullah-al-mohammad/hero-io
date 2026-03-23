import { Suspense } from 'react';
import useData from '../../hooks/useData/useData';
import Banner from './Banner/Banner';
import TopAppsSection from './TopAppsSection/TopAppsSection';

// const heroDataPromise = fetch('./data.json').then(res => res.json());
const Home = () => {
  const data = useData();
  return (
    <div className="space-y-10">
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <TopAppsSection heroDataPromise={data} />
      </Suspense>
    </div>
  );
};

export default Home;
