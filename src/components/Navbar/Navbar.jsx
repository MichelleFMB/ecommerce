import React, { useContext, useRef, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png'
import cartIcon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../data/ShopContext'
import nav_dropdown from '../../assets/dropdown.jpg'


const Navbar = () => {
  const[menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <p>Love Nikki</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="nav_dropdown" />
        <ul ref={menuRef} className="nav_menu">
          <li onClick={() =>{setMenu("shop")}}><Link to='/'>Home</Link> {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={() =>{setMenu("mens")}}><Link to='/mens'>Wardrobe</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={() =>{setMenu("womens")}}><Link to='/womens'>Latest Event</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={() =>{setMenu("kids")}}><Link to='/kids'>Stylist’s Arena</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ?<button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
          :<Link to='/login'><button>Login</button></Link>}
          
          <Link to='/cart'><img src={cartIcon} alt='cart_icon'/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar