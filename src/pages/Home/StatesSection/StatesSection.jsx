const StatesSection = () => {
  const formatLargeNumber = num => {
    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    });

    return formatter.format(num);
  };
  const downloads = 29.6 * 1000000;
  const reviews = 906 * 1000;

  return (
    <div className="bg-linear-to-br from-[#632EE3]  to-[#9F62F2] py-10">
      <div className="text-center text-white">
        <h2 className="text-4xl font-semibold mb-10">Trusted by Millions, Built for You</h2>
        <div className="stats stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value">{formatLargeNumber(downloads)}</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-title text-white">Total Reviews</div>
            <div className="stat-value">{formatLargeNumber(reviews)}</div>
            <div className="stat-desc text-white">46% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-title text-white">Active Apps</div>
            <div className="stat-value">132+</div>
            <div className="stat-desc text-white">31 more will Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesSection;
