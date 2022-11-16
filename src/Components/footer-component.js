import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div>
          <img src="images/logo.svg" alt="" className="logo" />
          <div className="footer-inner-row">
            <div>
              <img src="images/icon-phone.svg" alt="" />
            </div>
            <div>
              <p>Phone +1-543-123-4567</p>
            </div>
          </div>
          <div className="footer-inner-row">
            <div>
              <img src="images/icon-email.svg" alt="" />
            </div>
            <div>
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="socials">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </section>
    </footer>
  );
}
