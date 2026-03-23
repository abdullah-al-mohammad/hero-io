// import { RechartsDevtools } from '@recharts/devtools';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { Bar, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import downloadImage from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import reviewImage from '../../assets/icon-review.png';
const AppDetails = () => {
  const [installed, setInstalled] = useState(false);
  const { id } = useParams();
  const data = useLoaderData();

  const showData = data.find(app => app.id === parseInt(id));
  console.log(showData);
  if (!showData) {
    return <span>data not found...</span>;
  }

  const { image, title, downloads, ratingAvg, reviews, ratings, description } = showData;
  console.log(image);

  const formatLargeNumber = num => {
    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    });

    return formatter.format(num);
  };
  const download = downloads * 10;
  const review = reviews * 10;

  const handleInstall = () => {
    setInstalled(true);
    if (!installed) {
      toast.success(`${title} installed successfully 🎉`);
    }
  };
  const reviewData = Array.isArray(ratings) ? ratings : [];
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
            onClick={handleInstall}
            disabled={installed}
            className={`btn w-52 text-white ${
              installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'
            }`}
          >
            {installed ? 'installed' : 'Install Now (291 MB)'}
          </button>
        </div>
      </div>
      <div className="w-full h-[300px]">
        <h3 className="mt-5">Ratings</h3>
        <ResponsiveContainer>
          <ComposedChart layout="vertical" data={reviewData}>
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" />
            <Tooltip />

            <Bar dataKey="count" barSize={15} fill="#FF8811" />
          </ComposedChart>
        </ResponsiveContainer>
        <div>
          <h3 className="font-semibold mb-5">Description</h3>
          <p>{description}</p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AppDetails;
