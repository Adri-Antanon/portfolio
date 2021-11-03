import React from "react";

import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/SkillsSection";
import SoftSkillsSection from "../components/SoftSkillsSection";
import Title from "../components/Title";

import teamwork from "../assets/img/teamwork.svg";
import adaptability from "../assets/img/adaptability.svg";
import communication from "../assets/img/communication.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"Skills"} span={"Skills"} />
      <SkillsSection />
      <Title title={"Soft Skills"} span={"Soft"} />
      <div className="SoftSkillsContainer">
        <SoftSkillsSection
          image={teamwork}
          title={"Teamwork"}
          text={"Nurture healthy work environments and help each other."}
        />
        <SoftSkillsSection
          image={adaptability}
          title={"Adaptability"}
          text={"Try new tools and techniques to improve everyone's work"}
        />
        <SoftSkillsSection
          image={communication}
          title={"Communication"}
          text={"A concise email helps avoid back and forth messages."}
        />
      </div>
    </div>
  );
};

export default AboutPage;
