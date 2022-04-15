import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import QuoteSection from "./components/QuoteSection";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container main">
        <HeroSection />
        <SkillSection />
        <QuoteSection />
      </div>
    </div>
  );
}

export default App;
