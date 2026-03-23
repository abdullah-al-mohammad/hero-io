import { Link } from 'react-router';
import error from '../../assets/error-404.png';

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <img src={error} alt="" />
      <h1 className="text-2xl my-2 font-bold">Oops! Page Not Found</h1>
      <p className="text-gray-500">The page you are looking for is not available.</p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
