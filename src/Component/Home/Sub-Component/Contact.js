import React from 'react'

function Contact() {
  return (

    <div className='flex padd'>
      <h1>Contact us</h1>
      <section id="contact" className="contact contact_new">
        
      <div className="container" data-aos="fade-up" data-aos-delay="100">
<div className='four-box'>
        <div className="row gy-4 contact_row">
          <div className="col-lg-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center padd">
              <i className="bi bi-map"></i>
              <h3>Our Office Address</h3>
              <p>Plam Court Bldg M 501/B, 5th Floor, New Link Road, Beside Goregaon Sports Complex, Malad west, Mumbai, Maharashtra 400064</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center padd">
              <i className="bi bi-envelope"></i>
              <h3>General Enquiries</h3>
              <p>websupport@justdial.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item   d-flex flex-column justify-content-center align-items-center padd">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+91-8888888888</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item   d-flex flex-column justify-content-center align-items-center padd">
              <i className="bi bi-telephone"></i>
              <h3>Our Timing</h3>
              <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
            </div>
          </div>
   </div>
 </div>


        <div className="row gy-4 mt-1 contact_row" >

          <div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
          </div>

        <div className="col">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">

              <div className="row gy-4">
                <div className="col-lg-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-lg-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>

              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
         </div>

        </div>

      </div>
    </section>


  </div>

  )
}

export default Contact
