import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../src/components/Header/Header";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { MySkills } from "../src/components/MySkills/MySkills";
import { MyProjects } from "../src/components/MyProjects/MyProjects";
import { ContactMe } from "../src/components/ContactMe/ContactMe";
// import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <ContactMe />
        {/* <Route exact path="/">
          <AboutMe />
        </Route>
        <Route path="/mySkills">
          <MySkills />
        </Route>
        <Route path="/projects">
          <MyProjects />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
