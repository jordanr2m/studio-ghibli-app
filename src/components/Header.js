import logo from '../imgs/ghibli-logo.png'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="Studio Ghibli Logo"/>
        <h1>Studio Ghibli Film Finder</h1>
        <h2>Find your next Ghibli film</h2>
      </div>
    </header>
  );
};

export default Header;
