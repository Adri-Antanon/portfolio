import React from "react";

import { HARD_SKILLS } from "../data/allSkills";

const SkillsSection = () => {
  // const { skill, progress, width } = props;

  // Hark skills en formato de barras
  // const chartContent = (
  //   <div className="SkillsSection">
  //     <div className="skills-container">
  //       <h5 className="skill-title">{skill}</h5>
  //       <div className="skill-bar">
  //         <p className="skill-text">{progress}</p>
  //         <div className="skill-progress">
  //           <div className="progress">
  //             <div className="inner-pregress" style={{ width: width }}></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="skills-container">
      {HARD_SKILLS.map((skill) => (
        <div className="skills-item">
          <img src={skill.src} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
