import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { AlignJustify, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [scrollDown, setScrollDown] = useState(false);
  const [activeIcon, setActiveIcon] = useState(false);

  const handleMenu = (menuList) => {
    return setMenu(menuList);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setScrollDown(true) : setScrollDown(false);
    });
  }, []);

  return (
    <div className={`navbar ${scrollDown ? 'dark-nav' : ''}`}>
      <img src={assets.logo} alt="" className="logo" />
      <ul className={`navbar-menu ${activeIcon ? 'active-icon' : ''}`}>
        <div className="navbar-close-menu" onClick={() => setActiveIcon(!activeIcon)}>
          <X size={35} />
        </div>
        <img src={assets.logo} alt="" className="menu-logo" />
        <Link
          to="/"
          onClick={() => {
            handleMenu('home'), setActiveIcon(!activeIcon);
          }}
          className={`navbar-menu-li ${menu === 'home' ? 'active' : ''}`}>
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            handleMenu('menu'), setActiveIcon(!activeIcon);
          }}
          className={`navbar-menu-li ${menu === 'menu' ? 'active' : ''}`}>
          menu
        </a>
        <a href='#app-download'
          onClick={() => {
            handleMenu('mobile-app'), setActiveIcon(!activeIcon);
          }}
          className={`navbar-menu-li ${menu === 'mobile-app' ? 'active' : ''}`}>
          mobile-app
        </a>
        <a
          href="#contacts"
          onClick={() => {
            handleMenu('contact us'), setActiveIcon(!activeIcon);
          }}
          className={`navbar-menu-li ${menu === 'contact us' ? 'active' : ''}`}>
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
        <div onClick={() => setActiveIcon(!activeIcon)}>
          <AlignJustify className="navbar-menu-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
