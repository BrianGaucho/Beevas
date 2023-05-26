import CountUp from 'react-countup'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* Left */}
            <div className="flexColStart hero-left">

                <div className="hero-title">
                    <div className="orange-circle">

                    </div>
                    <h1>
                        Discover <br/> Most suitable <br /> Property
                    </h1>
                </div>

                <div className="flexColStart hero-description">
                    <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
                    <span className='secondaryText'>Forget all difficulties in finding a suitable residence</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={200} end={10000} duration={6}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Premium Products
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={2} end={2000} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Award Winning
                        </span>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="hero" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero