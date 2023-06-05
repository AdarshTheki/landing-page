import mail from '../assets/mail.png'
import featureImageBg1 from '../assets/Photos/featureImageBg1.svg'
import featureImageBg2 from '../assets/Photos/featureImageBg2.png'
import featuresImage1 from '../assets/Photos/featuresImage1.png'
import featuresImage2 from '../assets/Photos/featuresImage2.png'

const DetailSection = () => {
  return (
    <>
    {/* section for displaying first feature */}
    <section className="features-section first-feature-section">
      {/* for displaying the images */}
      <div>
        <img src={featureImageBg1} alt="image background" />
        <img src={featuresImage1} alt="feature image 1" />
      </div>

      {/* for displaying the written content */}
      <div>
        <h1>Modern, Trendy, Affordable</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, Dolorem quo
          rem officia nisi exercitationem porro?
        </p>
        <button>Early Bird Book</button>
      </div>
    </section>

    {/* section for displaying second feature */}
    <section className="features-section second-feature-section">
      {/* for displaying the written content */}
      <div>
        <h1>Unique House for Long Term!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo
          rem officia nisi exercitationem porro?
        </p>
        <button>Early Bird Book</button>
      </div>

      {/* for displaying the images */}
      <div>
        <img src={featureImageBg2} alt="image background" />
        <img src={featuresImage2} alt="feature image 2" />
      </div>
    </section>

    {/* section for creating the newsletter */}
    <section className="newsletter">
      <h1>Subscribe to Our Newsletter <br/> For Weekly Article Update.</h1>
      <p>
        We have real estate-related blog so we can share our thoughts and
        rutinity in our blog that updated weekly. We will not spam you, we
        promise.
      </p>

      {/* for taking user email */}
      <form>
        <div>
          <img src={mail} alt="mail"/>
          <input type="text" placeholder="Enter tour e-mail address"/>
        </div>
        <button>Subscribe</button>
      </form>
    </section>

    </>
  )
}

export default DetailSection
