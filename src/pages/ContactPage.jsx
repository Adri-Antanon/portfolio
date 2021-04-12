/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import ContactItem from '../components/ContactItem';
import Title from '../components/Title';


import phone from '../assets/img/phone.svg';
import email from '../assets/img/email.svg';

const ContactPage = () => {

  return (
    <div>
      <div className="title">
        <Title
          title={'About Me'}
          span={'About Me'}
        />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56957.96871151374!2d2.1314180253769686!3d41.385283789602155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20B!5e0!3m2!1ses!2ses!4v1618185853568!5m2!1ses!2ses"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            title={'Telephone'}
            text={'+34 654 497 613'}
          />
          <ContactItem
            icon={email}
            title={'Email'}
            text={'adrianantanon@gmail.com'}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;