import React, { useState } from 'react';

import webDevProjects from '../data/allProjects';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import Title from '../components/Title';

const allCategories = ['All', ...new Set(
  webDevProjects.map(item => item.category)
)];

const ProjectsPage = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(webDevProjects);

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(webDevProjects)
      return;
    }
    const filteredData = webDevProjects.filter((item) => {
      return item.category === category;
    })
    setMenuItems(filteredData);
  }

  return (
    <div className="ProjectsPage" >
      <div className="title">
        <Title
          title={'Projects'}
          span={'projects'}
        />
      </div>
      <div className="projects-data">
        <Categories
          filter={filter}
          categories={categories}
        />
        <MenuItems
          menuItem={menuItems}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;