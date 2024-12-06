import logo from '../imgs/ghibli-logo.png'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className='logo-wrapper'>
          <img src={logo} alt="Studio Ghibli Logo" />
        </div>
        <div className='typewriter'>
          <h1>Studio Ghibli Film Finder</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
