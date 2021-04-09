import React from 'react';

const Title = (props) => {
  const { title, span } = props;
  return (
    <div className="Title">
      <h3>
        {title}
        <span> {span} </span>
      </h3>
    </div>
  );
};

export default Title;