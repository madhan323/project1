import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Footer from "../components/Footer";
import SectionBanner from "../components/SectionBanner";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import DiveDeeper from "../components/Divedeeper";
import Zen from "../components/Zen";



function Home() {
  return (
    <>
    <SectionBanner />
      <Carousel />
       <Welcome />
       <DiveDeeper />
       <Zen />
      <Add />
     
      
      


    </>
  );
}

export default Home;