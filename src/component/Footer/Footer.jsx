import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer sm:footer-horizontal text-base-content p-10 max-w-7xl mx-auto">
        <aside>
          <img className="w-10" src={logo} alt="" />
          <p>
            Hero.io helps you discover, compare, and choose the best apps with ease. <br /> Stay
            updated with trending apps, honest reviews, <br /> and smart recommendations—all in one
            place.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">App Discovery</a>
          <a className="link link-hover">App Reviews</a>
          <a className="link link-hover">Trending Apps</a>
          <a className="link link-hover">Recommendations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Hero.io</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog & Updates</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
