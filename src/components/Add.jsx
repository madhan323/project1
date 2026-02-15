import "./Add.css";
import Carousel from "./Carousel";

function Add() {
  return (
    <div className="initiated-wrapper">

      <Carousel />
      
      {/* Top Section */}
      <div className="zen-section">
        
        <h1>Initiated Zen Abodes</h1>
        <p>
          Helvetica Light is an easy-to-read font, with tall and narrow letters,
          that works well on almost every site. Helvetica Light is an easy-to-read
          font, with tall and narrow letters, that works well on almost every site.
          Helvetica Light is an easy-to-read font, with tall and narrow letters,
          that works well on almost every site.
        </p>
        
      </div>


      {/* Locations Section */}
      <div className="location-section">
        <h1>Initiated Locations</h1>

        <div className="card-container">
          
          {/* Card 1 */}
          <div className="card">
            <img
              src="https://c8.alamy.com/comp/D8BRM1/matrimandir-golden-temple-in-auroville-tamil-nadu-india-D8BRM1.jpg"
              alt="Auroville"
            />
            <div className="card-content">
              <h3>Auroville, India</h3>
              <p>
                Auroville is an experimental township in Viluppuram district, mostly in the state of Tamil Nadu, India, with some parts in the Union Territory of Pondicherry in India. It was founded in 1968 by Mirra Alfassa and designed by architect Roger Anger.Auroville – an ideal township devoted to an experiment in human unity. Auroville
              </p>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Beach"
            />
            <div className="card-content">
              <h3>Mystery Location</h3>
              <p>
                Nestled amidst the vast expanse of Iceland, the Blue Lagoon is a geothermal oasis offering a surreal experience. Its milky blue waters, rich in minerals, create a rejuvenating spa haven. Surrounded by volcanic landscapes and steamy waters, it's a serene escape that merges natural beauty with therapeutic relaxation. Mystery Locatoin
              </p>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.3SIWa1OuNVywyt9JixGdqgHaE8?pid=Api&P=0&h=180"
              alt="Angkor Wat"
            />
            <div className="card-content">
              <h3>Angkor Wat</h3>
              <p>
                Cambodia's ancient marvel, stands as the world's largest religious monument. A testament to Khmer architecture, its intricate sandstone temples and ornate bas-reliefs narrate tales of ancient empire. Majestic spires pierce the sky in this UNESCO heritage site, drawing visitors into its mystical historical embrace.
              </p>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
          {/* card4 */}
          <div className="card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.wcvon4LyvdTAIsoQsaIM0wHaEK?pid=Api&P=0&h=180"
              alt="Northern Light"
            />
            <div className="card-content">
              <h3>Northern Light</h3>
              <p>
                Akureyri, Iceland's charming northern gem, nestles by Eyjafjörður,Known as the "Capital of the North,"  including the iconic Akureyri Church and serene Botanical Garden. Winter brings snow adventures, while summer illuminates stunning landscapes under the midnight sun, inviting explorationNestled amidst the vast expanse of Iceland, the Blue Lagoon is a geothermal oasis offering a surreal experience. Its milky blue waters, rich in minerals, create a rejuvenating spa haven. Surrounded by volcanic landscapes and steamy waters, therapeutic relaxation. 
              </p>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Add;
