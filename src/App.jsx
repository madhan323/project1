import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./components/Add"; 
import Home from "./page/Home";
import Dreamer from "./page/Dreamer";
import ZenAbodes from "./page/ZenAbodes";
import GetInvolved from "./page/GetInvolved";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dreamer" element={<Dreamer />} />
        <Route path="/zenabodes" element={<ZenAbodes />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        {/* <Route path="/Member login" element={<Member  />} /> */}
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;



