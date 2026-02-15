import { Link } from "react-router-dom";
import "./Zen.css";

function Zen() {
  return (
    <div className="zen-container">

      {/* Top Logo */}
      <div className="top-logo">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.NDPE5YmBAwFg3Jav0x8WEAHaHa?pid=Api&P=0&h=180"
          alt="Vishwameva Logo"
        />
      </div>

      {/* Orange Box */}
      <div className="zen-box">

        <Link to="/DiscoverZen" className="zen-item">
          <span className="zen-icon">🌍</span>
          <span className="zen-text">Discover Zen Abode</span>
        </Link>

        <Link to="/BuildZen" className="zen-item">
          <span className="zen-icon">🏠</span>
          <span className="zen-text">Build Zen Abode</span>
        </Link>

        <Link to="/ActualiseZen" className="zen-item">
          <span className="zen-icon">🧘</span>
          <span className="zen-text">Actualise Zen Abode</span>
        </Link>

      </div>
    </div>
  );
}

export default Zen;