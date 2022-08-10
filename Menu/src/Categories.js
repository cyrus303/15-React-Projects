import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <h2 className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </h2>
  );
};

export default Categories;
