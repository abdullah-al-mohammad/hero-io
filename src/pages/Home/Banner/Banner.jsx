import { Link } from 'react-router';
import app from '../../../assets/app.png';
import hero from '../../../assets/hero.png';
import play from '../../../assets/play.png';
import StatesSection from '../StatesSection/StatesSection';
const Banner = () => {
  return (
    <div>
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold">
          We Build <br /> <span className="text-primary2">Productive</span> Apps
        </h1>
        <p className="text-Slate-Blue">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and
          more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-2 justify-center items-center mb-10">
          <Link to={'https://play.google.com/store/apps'}>
            <button type="button" className="btn">
              <span>
                <img className="w-5" src={play} alt="" />
              </span>
              Google Play
            </button>
          </Link>
          <Link to={'https://apps.apple.com/us/iphone'}>
            <button type="button" className="btn">
              <span>
                <img className="w-5" src={app} alt="" />
              </span>
              App Store
            </button>
          </Link>
        </div>
      </div>
      <img className="w-3xl mx-auto" src={hero} alt="" />
      <div>
        <StatesSection />
      </div>
    </div>
  );
};

export default Banner;
