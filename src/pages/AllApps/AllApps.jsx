import useData from '../../hooks/useData/useData';
import ShowAllData from './ShowAllData';

const AllApps = () => {
  const allApps = useData();
  return (
    <div>
      <h1>Our All Applications</h1>
      <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div>
        {allApps.map(app => (
          <ShowAllData key={app.id} app={app}></ShowAllData>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
