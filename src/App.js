import Navbar from "./styles/components/Navbar";
import HeroSection from "./styles/components/HeroSection";
import ImproveSkills from "./styles/components/ImproveSkills";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection/>
        <ImproveSkills/>
      </div>
      
    </div>
  );
}

export default App;
