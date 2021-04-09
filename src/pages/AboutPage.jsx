import React from 'react';
import ImageSection from '../components/ImageSection';

import Title from '../components/Title';

const AboutPage = () => {

  return (
    <div className="AboutPage">
      <Title
        title={'About Me'}
        span={'About Me'}
      />
      <ImageSection />
      <Title title={'Skills'} span={'Skills'} />

    </div>
  );
};

export default AboutPage;