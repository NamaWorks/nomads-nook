import { useNavScroll } from '../../../utils/hooks/useNavScroll';
import NavBar from '../../elements/NavBar/NavBar'
import VerticalCarousel from '../../elements/VerticalCarousel/VerticalCarousel';
import './About.css'

import React from 'react'

const About = () => {
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  return (
    <>
      <NavBar

        titleSize={titleSize}
        navPos={navPos}
        navGap={navGap}
        navHeight={navHeight}
        navTop={navTop}
        titleBottom={titleBottom}

       />

      <main className="about-page">
        <section className="about-section about-info">
          <div className="services">
            <p>
              Our photographers are carefully chosen for their unique ability to
              capture the essence of tranquility and mid-century aesthetics.
              They bring their diverse perspectives and technical expertise to
              create images that transform spaces and inspire a sense of calm.
              By supporting these artists, you’re not only enhancing your
              environment but also contributing to the art community.
            </p>

            <p className='prev-list'>
              We’ve made it easy for you to find and purchase the perfect photos
              for your needs. Here’s how it works:
            </p>
            <ol className="about-list" type="1">
              <li>
                Browse Our Collection: Explore our curated galleries and
                discover a wide range of zen and mid-century inspired
                photographs.
              </li>
              <li>
                Select Your Favorites: Click on the images you love to see more
                details and preview them in different settings.
              </li>
              <li>
                Choose a License: Select the license that best suits your needs.
                We offer several options to fit both personal and commercial
                use.
              </li>
              <li>
                Purchase and Download: Add your selected photos to the cart,
                proceed to checkout, and complete your purchase. You will
                receive a download link via email immediately after payment.
              </li>
            </ol>
          </div>
          <div className="about-pricing">
            <ul>
              <li className="pricing-item">
                <p>personal use license</p>
                <div className="lower-dash-container"></div>
                <p className="price">$00 per image</p>
              </li>
              <li className="pricing-item">
                <p>commercial license</p>
                <div className="lower-dash-container"></div>
                <p className="price">$99 per image</p>
              </li>
              <li className="pricing-item">
                <p>extended license</p>
                <div className="lower-dash-container"></div>
                <p className="price">$199 per image</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-section carousel">
          <VerticalCarousel />
        </section>
      </main>
    </>
  );
}

export default About