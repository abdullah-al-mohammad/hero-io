// import { RechartsDevtools } from '@recharts/devtools';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { Bar, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import downloadImage from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import reviewImage from '../../assets/icon-review.png';
import { addStoredApp, getAppData } from '../../localStorage/localStorage';
import NoData from '../NotFound/NotFound';
const AppDetails = () => {
  const [installedIds, setInstalledIds] = useState(getAppData());
  const { id } = useParams();
  const data = useLoaderData();

  const installed = installedIds.includes(parseInt(id));
  const showData = data.find(app => app.id === parseInt(id));
  if (!showData) {
    return <NoData />;
  }
  const { image, title, downloads, ratingAvg, reviews, ratings, description } = showData;

  const formatLargeNumber = num => {
    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    });

    return formatter.format(num);
  };
  const download = downloads * 10;
  const review = reviews * 10;
  const ratingData = ratings.slice().reverse();

  const handleInstall = id => {
    if (installed) return;

    const updated = [...installedIds, id];
    setInstalledIds(updated);
    addStoredApp(id);

    toast.success(`${title} installed successfully`);
  };

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <div className="w-52 mx-auto">
          <img className="p-5" src={image} alt="" />
        </div>
        <div className="card-body text-center border-e-gray-400">
          <h2 className="card-title">{title}</h2>
          <div className="border-t border-gray-400"></div>
          <div className="stats stats-vertical lg:stats-horizontal">
            <div className="stat">
              <img className="w-8 mx-auto" src={downloadImage} alt="" />
              <div className="stat-title">Downloads</div>
              <div className="stat-value">{formatLargeNumber(download)}</div>
            </div>

            <div className="stat">
              <img className="w-8 mx-auto" src={rating} alt="" />
              <div className="stat-title">Average Ratings</div>
              <div className="stat-value">{ratingAvg}</div>
              <div className="stat-desc text-white">46% more than last month</div>
            </div>

            <div className="stat">
              <img className="w-8 mx-auto" src={reviewImage} alt="" />
              <div className="stat-title">Total Reviews</div>
              <div className="stat-value">{formatLargeNumber(review)}</div>
            </div>
          </div>
          <button
            onClick={() => handleInstall(parseInt(id))}
            disabled={installed}
            className={`btn w-52 text-white ${
              installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'
            }`}
          >
            {installed ? 'installed' : 'Install Now (291 MB)'}
          </button>
        </div>
      </div>
      <div className="w-full h-75 pb-5">
        <h3 className="mt-5">Ratings</h3>
        <ResponsiveContainer className={'pb-5'}>
          <ComposedChart layout="vertical" data={ratingData}>
            <XAxis type="number" axisLine={false} tickLine={false} domain={[0, 100]} />
            <YAxis dataKey="name" axisLine={false} tickLine={false} type="category" />
            <Tooltip />

            <Bar dataKey="count" barSize={15} fill="#FF8811" />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="border-b border-gray-300"></div>
        <div className="pt-5">
          <h3 className="font-semibold mb-5">Description</h3>
          <p>{description}</p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AppDetails;
