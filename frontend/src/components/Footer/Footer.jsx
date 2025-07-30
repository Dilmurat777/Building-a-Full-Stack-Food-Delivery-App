import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="contacts">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione explicabo tenetur sit
            officia vitae quis nihil rem et iusto eum sunt excepturi accusamus facilis quibusdam
            dolorem voluptate, atque dolore in.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+1-212-234-3443</li>
            <li>mrDilmurat777@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright &copy; 2025 mrDilmurat777@gmail.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
