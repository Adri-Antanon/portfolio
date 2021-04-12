import React from 'react';

const Categories = (props) => {
  const { filter, categories } = props;
  return (
    <div className="buttons">
      {categories.map((categorie, index) => {
        return <button
          type="button"
          className="btn-port"
          onClick={() => filter(categorie)}
          key={index + ""}>
          {categorie}
        </button>
      })}
    </div>
  );
};

export default Categories;