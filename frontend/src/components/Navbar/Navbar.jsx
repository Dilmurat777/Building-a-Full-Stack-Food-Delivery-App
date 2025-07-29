import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
	const [menu, setMenu] = useState('home')
	const [scrollDown, setScrollDown] = useState(false)

	const handleMenu = (menuList) => {
		setMenu(menuList)
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 60 ? setScrollDown(true) : setScrollDown(false)
		})
	}, [])


  return (
	<div className={`navbar ${scrollDown ? 'dark-nav' : ''}`}>
		  <img src={assets.logo} alt="" className='logo' />
		  <ul className='navbar-menu'>
			<li onClick={() => handleMenu('home')} className={menu === 'home' ? 'active' : ''}>home</li>
			<li onClick={() => handleMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</li>
			<li onClick={() => handleMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</li>
			<li onClick={() => handleMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>contact us</li>
		  </ul>
		  <div className="navbar-right">
			  <img src={assets.search_icon} alt="" />
			  <div className="navbar-search-icon">
				  <img src={assets.basket_icon} alt="" />
				  <div className="dot"></div>
			  </div>
			  <button>sign in</button>
		  </div>
	</div>
  )
}

export default Navbar
