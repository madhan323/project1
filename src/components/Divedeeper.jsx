import { Link } from "react-router-dom";
import "./DiveDeeper.css";


function DiveDeeper() {
  
  return (
    <div className="dive-wrapper">

      <h2 className="dive-title">DIVE DEEPER</h2>

      <div className="purple-card">

        <div className="item">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" 
            alt="Globe"
          />
          <h3>Vishwameva Kutumbakam</h3>
        </div>

        <div className="item">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/4149/4149676.png" 
            alt="Dream"
          />
          <h3>Our Dream Story</h3>
        </div>

        <div className="item">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" 
            alt="Akshaya Patra"
          />
          <h3>Akshaya Patra Economics</h3>
        </div>
        
      </div>

    </div>

  );
}

export default DiveDeeper;