import './Contact.css'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">

            {/* Left */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>Always ready to help through providing the best homes where memories are made</span>

                <div className="flexColStart"></div>
            </div>

            {/* Right */}
            <div className="c-right">
                <div className="image-container c-right">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact