import React from 'react';

const SoftSkillsSection = (props) => {
  const { image, title, text } = props;

  return (
    <div className="SoftSkillsSection">
      <div className="softSkill">
        <div className="softSkill-content">
          <img src={image} alt={`${title} as a soft skill`} />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsSection;