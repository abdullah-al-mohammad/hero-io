import useData from '../../hooks/useData/useData';
import ShowAllData from './ShowAllData';

const AllApps = () => {
  const allApps = useData();
  return (
    <div>
      <h1 className="mb-4 text-4xl text-center font-semibold">Our All Applications</h1>
      <p className="mb-12 text-center text-Slate-Blue">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allApps.map(app => (
          <ShowAllData key={app.id} app={app}></ShowAllData>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
