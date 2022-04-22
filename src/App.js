import Navbar from "./styles/components/Navbar";
import HeroSection from "./styles/components/HeroSection";
import ImproveSkills from "./styles/components/ImproveSkills";
import QuoteSection from "./styles/components/QuoteSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection/>
        <ImproveSkills/>
        <QuoteSection/>
      </div>
      
    </div>
  );
}

export default App;
