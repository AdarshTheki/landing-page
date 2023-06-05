import Logo from '../assets/Logo.svg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    // creating the footer area
    <footer>
      <div>
        <img src={Logo} alt="logo" />
        {/* for social media icons */}
        <div className='social-icons'>
          <img src={facebook} alt="facebook icon" />
          <img src={twitter} alt="twitter icon" />
          <img src={instagram} alt="instagram icon" />
        </div>
        <p>2022 Award winning Real estate and Lorem ipsum dolor sit amet</p>
      </div>

      {/* for all different pages links */}
      <div className="footer-links">
        <div className="footer-links-content">
          <ul>
            <li><a href="#">Location</a></li>
            <li><a href="#">America</a></li>
            <li><a href="#">Asia</a></li>
            <li><a href="#">Europe</a></li>
            <li><a href="#">Africa</a></li>
          </ul>
        </div>

        <div className="footer-links-content">
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-links-content">
          <ul>
            <li><a href="#">Legals</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Company</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
