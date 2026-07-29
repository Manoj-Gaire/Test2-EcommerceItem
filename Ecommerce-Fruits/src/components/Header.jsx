import { useState } from 'react'

function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)

  return (
    <header className="header">
      <div className="middle-header">
        <div className="container middle-header-inner">
          <a href="#" className="logo">
            <span className="logo-leaf">&#127808;</span>
            <span className="logo-text">Safira</span>
          </a>

          <div className="header-search">
            <div className="search-category" onClick={() => setCatOpen(!catOpen)}>
              <span>All</span>
              <i className="fa fa-angle-down"></i>
            </div>
            <input type="text" placeholder="Search product..." />
            <button className="search-btn"><i className="fa fa-search"></i></button>
          </div>

          <div className="header-right">
            <a href="#" className="header-link">
              <i className="fa fa-user"></i>
              <span>Login / Sign up</span>
            </a>
            <a href="#" className="header-link">
              <i className="fa fa-heart"></i>
              <span className="header-count">0</span>
            </a>
            <a href="#" className="header-link cart-link">
              <i className="fa fa-shopping-cart"></i>
              {cartCount > 0 && <span className="header-count">{cartCount}</span>}
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-header">
        <div className="container bottom-header-inner">
          <div className="categories-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa fa-bars"></i>
            <span>All Categories</span>
            <i className="fa fa-angle-down"></i>
          </div>
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#products">Shop</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
