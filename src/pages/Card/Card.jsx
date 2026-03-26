import { Link } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';

const Card = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;

  const formatLargeNumber = num => {
    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    });

    return formatter.format(num);
  };
  const download = downloads * 100;
  return (
    <>
      <Link to={`/details/${id}`}>
        <div className="card bg-base-100 shadow-sm p-5">
          <figure>
            <img className="w-40" src={image} alt="apps" />
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

export default Card;
