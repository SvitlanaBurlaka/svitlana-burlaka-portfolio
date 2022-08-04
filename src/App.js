import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../src/components/Header/Header";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { MySkills } from "../src/components/MySkills/MySkills";
import { MyProjects } from "../src/components/MyProjects/MyProjects";
import { ContactMe } from "../src/components/ContactMe/ContactMe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
}

export default App;
