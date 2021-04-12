import React from 'react';

const ContactItem = (props) => {
  const { icon, title, text } = props;
  return (
    <div className="contact">
      <img src={icon} alt="" />
      <div className="right-items">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactItem;