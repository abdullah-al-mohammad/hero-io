import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import useData from '../../hooks/useData/useData';
import ShowAllData from './ShowAllData';

const AllApps = () => {
  const { data, loading } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  const filterApps = data.filter(app =>
    app.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  if (filterApps.length === 0) {
    return <div className="col-span-full text-center text-gray-500 mt-4">No App Found</div>;
  }

  return (
    <div>
      <h1 className="mb-4 text-4xl text-center font-semibold">Our All Applications</h1>
      <p className="mb-12 text-center text-Slate-Blue">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center mb-8">
        <h4 className="font-bold">({data.length}) Apps Found</h4>
        <div>
          <label className="input">
            <IoIosSearch />
            <input
              // ref={inputRef}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              type="search"
              name="search"
              placeholder="Search Apps"
              id=""
              className="px-5 rounded grow"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filterApps.map(app => (
          <ShowAllData key={app.id} app={app}></ShowAllData>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
