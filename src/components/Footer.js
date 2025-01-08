import footerIcon from '../imgs/icons8-totoro-100.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <img src={footerIcon} alt='Totoro icon'/>
      <div>
        &copy; {new Date().getFullYear()} || Site by <a href="https://github.com/jordanr2m" target="blank">Jordan Jackson</a>
      </div>
    </footer>
  )
}

export default Footer
