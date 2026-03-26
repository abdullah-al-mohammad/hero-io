import { Link } from 'react-router';
import notFound from '../../assets/App-Error.png';

const NoData = ({ message = 'No Data Found' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-6xl mb-4">
        <img src={notFound} alt="" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-700">{message}</h2>
      <p className="text-gray-500 mt-2">There is nothing to display here right now.</p>

      <Link
        to="/"
        className="mt-6 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NoData;
