import "./DiscoverZen.css";

function DiscoverZen() {
  return (
    <div className="dream-container">

      <h1 className="dream-title">Dream Zen Abodes</h1>

      <div className="dream-content">
        <p>
          Avenir Light is a clean and stylish font favored by designers.
          It's easy on the eyes and a great go-to font for titles, paragraphs & more.
          Avenir Light is a clean and stylish font favored by designers.
          It's easy on the eyes and a great go-to font for titles, paragraphs & more.
        </p>

        <p>
          It's easy on the eyes and a great go-to font for titles, paragraphs &
          Avenir Light is a clean and stylish font favored by designers.
          It's easy on the eyes and a great go-to font for titles.
        </p>

        <p>
          It's easy on the eyes and a great go-to font for titles, paragraphs &
          Avenir Light is a clean and stylish font favored by designers.
          It's easy on the eyes and a great go-to font.
        </p>

        <p>
          It's easy on the eyes and a great go-to font for titles,
          paragraphs & more. It's easy on the eyes.
        </p>
      </div>

      <h1 className="main-title">Dream Locations</h1>

      <div className="locations-container">

        {/* Card 1 */}
        <div className="location-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwMLxejQTIBHmp3sLAhaonjJMIFGX7RBBfg&s"
            alt="Auroville"
            className="location-img"
          />
          <div className="location-info">
            <h2>Auroville, India</h2>
            <p>
              Auroville is an experimental township in Villupuram district,
              mostly in Tamil Nadu, India. Founded in 1968 by Mirra Alfassa.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="location-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Blue_Lagoon_Iceland.jpg"
            alt="Mystery Location"
            className="location-img"
          />
          <div className="location-info">
            <h2>Mystery Location</h2>
            <p>
              Nestled amidst Iceland’s vast landscapes, the Blue Lagoon
              offers a surreal geothermal experience.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="location-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Angkor_Wat_temple.jpg"
            alt="Angkor Wat"
            className="location-img"
          />
          <div className="location-info">
            <h2>Angkor Wat</h2>
            <p>
              Cambodia's ancient marvel and the world's largest religious monument.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>

      </div>

    </div>

  );
}

export default DiscoverZen;