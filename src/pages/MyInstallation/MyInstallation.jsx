import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useData from '../../hooks/useData/useData';
import { getAppData, removeStoredApp } from '../../localStorage/localStorage';
import ShowMyApp from './ShowMyApp';

const MyInstallation = () => {
  const { data, loading } = useData();
  // const localData = getAppData();
  const [installedIds, setInstalledIds] = useState(getAppData());
  const [sort, setSort] = useState([]);

  const filteredData = data.filter(d => installedIds.includes(d.id));
  const sorting = filteredData.sort((a, b) => {
    if (sort === 'high') {
      return b.downloads - a.downloads;
    }
    if (sort === 'low') {
      return a.downloads - b.downloads;
    }
    return 0;
  });

  if (loading) {
    return <span>loading ... </span>;
  }

  const handleUninstall = (id, title) => {
    removeStoredApp(id);

    const updated = installedIds.filter(appId => appId !== id);
    setInstalledIds(updated);
    toast.success(`${title} App Uninstall successfully`);
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-4">Your Installed Apps</h1>
      <p className="text-center mb-8">Explore All Trending Apps on the Market developed by us</p>
      <div className="flex justify-between items-center mb-8">
        <h4 className="font-bold text-2xl">{filteredData.length} Apps Found</h4>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Click ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => setSort('high')}>High → Low</button>
            </li>
            <li>
              <button onClick={() => setSort('low')}>Low → High</button>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {sorting.map(app => (
          <ShowMyApp key={app.id} app={app} handleUninstall={handleUninstall}></ShowMyApp>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyInstallation;
