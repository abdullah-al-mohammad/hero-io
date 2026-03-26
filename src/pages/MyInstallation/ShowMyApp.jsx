import downloadImg from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
const ShowMyApp = ({ app, handleUninstall }) => {
  const formatLargeNumber = num => {
    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    });

    return formatter.format(num);
  };
  const download = app.downloads * 10;
  const review = app.reviews * 10;

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-5 items-center">
          <img className="w-20" src={app.image} alt="" />
          <div>
            <h1 className="mb-5 text-xl">{app.title}</h1>
            <div className="flex items-center gap-5">
              <span className="flex gap-2">
                <img className="w-5" src={downloadImg} alt="" />
                {formatLargeNumber(download)}
              </span>
              <span className="flex gap-2 items-center">
                <img className="w-5" src={rating} alt="" />
                {formatLargeNumber(review)}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleUninstall(app.id, app.title)}
          className="btn bg-[#00D390]"
          type="button"
        >
          uninstall
        </button>
      </div>
    </>
  );
};

export default ShowMyApp;
