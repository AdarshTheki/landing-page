import LogoName from '../assets/logoName.svg'
import Data from './Data';
const HeroSection = () => {
  return (
<>
  {/* multiple logos section */}
    <section className="my-logos">
      <img src={LogoName} alt="named logo" />
      <img src={LogoName} alt="named logo" />
      <img src={LogoName} alt="named logo" />
      <img src={LogoName} alt="named logo" />
      <img src={LogoName} alt="named logo" />
    </section>

    {/* section for displaying all our real state properties in a card */}
    <section className="cards-wrapper-section">
      <h1>Our Best Estate, <br />are Modern!</h1>

      {/* creating a main div to wrap all the cards */}
      <div className="cards-wrapper">
        {Data.map((e, index) => {
          return(
          <div key={index} className="card">
            <img src={e.Location} alt={e.altName} />
            <div className="card-box">
              <div>
                <h3>{e.Name}</h3>
                <p>{e.Price}</p>
              </div>
              <button>Detail</button>
            </div>
          </div>
        )})}
      </div>
    </section>
</>
  )
}

export default HeroSection
