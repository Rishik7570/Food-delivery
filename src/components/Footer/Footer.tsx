import { assets } from '../Assets/frontend_assets/Data'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-contents">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-123-456-789</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ Tomato.com - All rights reserved.</p>
    </div>
  )
}

export default Footer
