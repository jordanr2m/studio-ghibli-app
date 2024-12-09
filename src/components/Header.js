import logo from '../imgs/ghibli-logo.png'
import ghibliNavImg from "../imgs/ghibli-1.png"

const Header = ({ setLearnMore }) => {
  return (
    <header>
      <div className="wrapper">
        <div className='logo-wrapper'>
          <img src={logo} alt="Studio Ghibli Logo" />
        </div>

        <div className='typewriter'>
          <h1>Studio Ghibli Film Finder</h1>
        </div>

        {/* Glow Button */}
        <div className='glow-btn-container'>
          <div className='glow'></div>
          <button className='glow-btn' onClick={() => setLearnMore(true)}>Learn More</button>
        </div>

        <div className="search-img">
          <img src={ghibliNavImg} alt="Dancing characters from my neighbor Totoro" />
        </div>

      </div>
    </header>
  );
};

export default Header;
