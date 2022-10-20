import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
    </div>
    <ul className="nav-menu">
      <Link to="/" className="nav-item">
        <li>Home</li>
      </Link>
      <Link to="/products" className="nav-item">
        <li>Products</li>
      </Link>
      <Link to="/cart" className="nav-item">
        <li>Cart</li>
      </Link>
    </ul>
    <button className="logout-button" type="button">
      Logout
    </button>
  </nav>
)

export default Header
