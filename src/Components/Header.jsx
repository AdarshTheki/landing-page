import Logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header>
    {/* navbar */}
    <nav>
      <img src={Logo} alt="logo image" />
      {/* nav links */}
      <ul>
        <li><a href="#">Location</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Testimonial</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <hr />

    <div>
      <h1>Home That Makes <br />You Living Life!</h1>
      <p>
        Are you looking for amazing Real estate? Do not worry! we got it for
        you
      </p>
      <button>Learn More</button>
    </div>
  </header>
  )
}

export default Header
