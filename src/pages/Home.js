import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";

function Home(props) {
    return (
      <> 
        <HeroSection />
        <div className="grid justify-center">
          <div className="grid grid-cols-3 gap-4 place-items-center" id="projects">
            <Projects/>
          </div>
          <div className="grid grid-cols-5 gap-4 place-items-center mt-36 py-10" id="skills">
            <Skills />
          </div>
        </div>
      </>
    )
    
  }
  
  export default Home;