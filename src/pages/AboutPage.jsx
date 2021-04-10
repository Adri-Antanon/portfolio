import React from 'react';

import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import SoftSkillsSection from '../components/SoftSkillsSection';
import Title from '../components/Title';

import teamwork from '../assets/img/teamwork.svg';
import test from '../assets/img/intelligence.svg';
import adaptability from '../assets/img/adaptability.svg';
import communication from '../assets/img/communication.svg';

const AboutPage = () => {

  return (
    <div className="AboutPage">
      <Title
        title={'About Me'}
        span={'About Me'}
      />
      <ImageSection />
      <Title title={'Skills'} span={'Skills'} />
      <div className="SkillsContainer">
        <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'React Js'} progress={'65%'} width={'65%'} />
        <SkillsSection skill={'Typescript'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'Angular 2+'} progress={'40%'} width={'40%'} />
        <SkillsSection skill={'HTML5'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'CSS3'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'SASS'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'Node Js'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'Java'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'PHP'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'SQL'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'NoSQL'} progress={'40%'} width={'40%'} />
      </div>
      <Title title={'Soft Skills'} span={'Soft'} />
      <div className="SoftSkillsContainer">
        <SoftSkillsSection
          image={teamwork}
          title={'Teamwork'}
          text={'Nurture healthy work environments and help each other.'}
        />
        <SoftSkillsSection
          image={adaptability}
          title={'Adaptability'}
          text={"Try new tools and techniques to improve everyone's work"}
        />
        <SoftSkillsSection
          image={communication}
          title={'Communication'}
          text={'A concise email helps avoid back and forth messages.'}
        />
      </div>
    </div>
  );
};

export default AboutPage;