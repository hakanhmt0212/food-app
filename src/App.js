import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container main">
        <HeroSection />
        <SkillSection />
      </div>
    </div>
  );
}

export default App;
