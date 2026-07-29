function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <a href="#" className="logo">
                <span className="logo-icon">&#127808;</span>
                <span className="logo-text">Safira</span>
              </a>
              <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
              <div className="footer-contact">
                <p><i className="fa fa-map-marker"></i> 4710-4890 Breckinridge USA</p>
                <p><i className="fa fa-envelope"></i> support@plazathemes.com</p>
                <p><i className="fa fa-phone"></i> 1-1001-234-5678</p>
              </div>

            </div>
            <div className="footer-col">
              <h4>Information</h4>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
              <a href="#">Wishlist</a>
              <a href="#">About Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Frequently Questions</a>
            </div>
            <div className="footer-col">
              <h4>Categories</h4>
              <a href="#">Lentil</a>
              <a href="#">Limes</a>
              <a href="#">Mangoes</a>
              <a href="#">Chickpea</a>
              <a href="#">Avocados</a>
              <a href="#">Cauliflower</a>
            </div>
            <div className="footer-col footer-newsletter-col">
              <h4>Sign Up To Newsletter</h4>
              <p>Subscribe to get the latest news and updates from Safira</p>
              <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit"><i className="fa fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Safira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
