import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="logo_footer">
          <a href='#' className="logo">
              <img className='logo-img' src={logo} alt="logo" />
          </a>
        </div>
        <div className='nav-menu'>
            <a href="#" className="nav">Каталог</a>
            <a href="#" className="nav">Оферта</a>
        </div>
        
    </footer>
  )
}

export default Footer