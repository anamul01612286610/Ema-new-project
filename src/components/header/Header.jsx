import logo from '../../images/Logo.svg'

import './Header.css'
const Header = () => {
    return (
        <div className='header'>
          <img src={logo} alt="" />
           <div className='header-nav'>
           <a href="">Order</a>
           <a href="">Order Review</a>
           <a href="">Manage Inventory</a>
           <a href="">Login</a>
        
           </div>
        </div>
    );
};

export default Header;