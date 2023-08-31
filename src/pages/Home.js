import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "./Projects";
function Home(props) {
    return (
      <> 
        <HeroSection />
        <div className="grid grid-cols-3 gap-4" id="projects">
        <Projects/>
        </div>
      </>
    )
    
  }
  
  export default Home;