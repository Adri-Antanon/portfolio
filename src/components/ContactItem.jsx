import React from 'react';

const ContactItem = (props) => {
  const { icon, iconAlt, title, text } = props;
  return (
    <div className="contact">
      <img src={icon} alt={iconAlt} />
      <div className="right-items">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactItem;