import "./Initiated.css";



function Initiated() {
  return (
    <div className="zen-page">

      {/* ===== HEADER WITH LAYERED WAVES ===== */}
      <div className="zen-hero">

        {/* Dark Purple Layer */}
        <div className="wave wave1"></div>

        {/* Medium Purple Layer */}
        <div className="wave wave2"></div>

        {/* Light Purple Layer */}
        <div className="wave wave3"></div>

        <div className="hero-content">
          <h1>INITIATED ZEN ABODES</h1>
          <p>
            The following Zen Abodes have passed the minimum threshold for take off
            and are currently being championed for implementation. Please click on
            each location to learn more about the Zen Abode and how you can get
            involved to champion the building of the Initiated Zen Abodes.
          </p>
        </div>
      </div>

      {/* ===== CARDS ===== */}
      <div className="zen-cards">
        <div className="zen-card">
          <img src="https://tse1.mm.bing.net/th/id/OIP.Or8ACrhj3B334PxdyEg8LgHaDG?pid=Api&P=0&h=180" alt="Location 1" />
        </div>

        <div className="zen-card">
          <img src="https://tse3.mm.bing.net/th/id/OIP.4hJMJVP6K-uJkrjVQCe8mwHaE8?pid=Api&P=0&h=180" alt="Location 2" />
        </div>

        <div className="zen-card">
          <img src="https://tse2.mm.bing.net/th/id/OIP.J1SruN3Bc9sIw1DP0UvT7gHaEh?pid=Api&P=0&h=180" alt="Location 3" />
        </div>

        <div className="zen-card">
          <img src="https://tse1.mm.bing.net/th/id/OIP.2g8uKzLXfVBDpP5bPOrqxQHaEK?pid=Api&P=0&h=180" alt="Location 4" />
        </div>
      </div>

    </div>
  );
}

export default Initiated;

