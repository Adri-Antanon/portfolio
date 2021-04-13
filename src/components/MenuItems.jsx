import React from 'react';

const MenuItems = (props) => {
  const { menuItem } = props;
  return (
    <div className="projects">
      {
        menuItem.map((item) => {
          return <div className="project" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt={item.title} />
              <ul className="hover-items">
                <li>
                  <a href={item.web} rel="noopener noreferrer" target="_blank">{item.icon1}</a>
                  <a href={item.repository} rel="noopener noreferrer" target="_blank">{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>
              {item.title}
            </h5>
            <p>{item.description}</p>
          </div>
        })
      }
    </div>
  );
};

export default MenuItems;