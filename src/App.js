import Navbar from "./styles/components/Navbar";
import HeroSection from "./styles/components/HeroSection";
import ImproveSkills from "./styles/components/ImproveSkills";
import QuoteSection from "./styles/components/QuoteSection";
import ChiefsSection from "./styles/components/ChiefsSection";
//import ChiefCard from "./styles/components/ChiefCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection/>
        <ImproveSkills/>
        <QuoteSection/>
        <ChiefsSection />
      </div>
      
    </div>
  );
}

export default App;
