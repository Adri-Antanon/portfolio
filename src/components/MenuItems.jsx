import React from 'react';

const MenuItems = (props) => {
  const { menuItem } = props;
  return (
    <div className="projects">
      {
        menuItem.map((item) => {
          console.log(item.link1);
          return <div className="project" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt={item.title} />
              <ul className="hover-items">
                <li>
                  <a href={item.link1} rel="noopener noreferrer" target="_blank">{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>
              {item.title}
            </h5>
            <p>Short description</p>
          </div>
        })
      }
    </div>
  );
};

export default MenuItems;