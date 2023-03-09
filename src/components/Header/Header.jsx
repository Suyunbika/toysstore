import logo from '../../assets/logo.png';
import basket from '../../assets/basket.png'

const Header = () => {
    return (
        <header className="header">
            <a href='#' className="logo">
                <img className='logo-img' src={logo} alt="logo" />
            </a>
            <a className='nav-menu' href="#">ToysStore</a>
            <a href='#' className="header-button"><img className='basket-img' src={basket} alt="" /></a>
        </header>
        
    );
};

export default Header;