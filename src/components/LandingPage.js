import { AboutMe } from "./AboutMe/AboutMe";
import { ContactMe } from "./ContactMe/ContactMe";
import { Header } from "./Header/Header";
import { MyProjects } from "./MyProjects/MyProjects";
import { MySkills } from "./MySkills/MySkills";

export const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
    </>
  );
};
