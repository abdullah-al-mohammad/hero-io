import { Link } from 'react-router';
import ShowTopApp from './ShowTopApp/ShowTopApp';

const TopAppsSection = ({ heroDataPromise }) => {
  const data = heroDataPromise;

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold mb-4">Trending Apps</h1>
      <p className="text-center mb-8 text-slate-400">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.slice(0, 8).map(app => (
          <ShowTopApp key={app.id} app={app}></ShowTopApp>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to={'/allApps'}>
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopAppsSection;
