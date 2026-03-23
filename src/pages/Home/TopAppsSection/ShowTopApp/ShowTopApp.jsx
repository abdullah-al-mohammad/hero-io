import { Link } from 'react-router';
import downloadImg from '../../../../assets/icon-downloads.png';
import rating from '../../../../assets/icon-ratings.png';
const ShowTopApp = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;

  const formatLargeNumber = num => {
    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    });

    return formatter.format(num);
  };
  const download = downloads * 100;
  //   {
  //   "image": "https://i.ibb.co/app12.png",
  //   "title": "FinanceBuddy",
  //   "companyName": "MoneyWise",
  //   "id": 12,
  //   "description": "Manage your expenses and track your savings.",
  //   "size": 22,
  //   "reviews": 950,
  //   "ratingAvg": 4.4,
  //   "downloads": 45000,
  //   "ratings": [
  //     {
  //       "name": "1 star",
  //       "count": 35
  //     },
  //     {
  //       "name": "2 star",
  //       "count": 55
  //     },
  //     {
  //       "name": "3 star",
  //       "count": 150
  //     },
  //     {
  //       "name": "4 star",
  //       "count": 350
  //     },
  //     {
  //       "name": "5 star",
  //       "count": 360
  //     }
  //   ]
  // }

  return (
    <>
      <Link to={`/details/${id}`}>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img className="" src={image} alt="apps" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-between">
              <div className="badge bg-[#F1F5E8] text-[#00D390]">
                <img className="w-4" src={downloadImg} alt="" />
                {formatLargeNumber(download)}
              </div>
              <div className="badge bg-[#FFF0E1] text-[#FF8811]">
                <img className="w-4" src={rating} alt="" />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShowTopApp;
