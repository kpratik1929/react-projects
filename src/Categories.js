import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <section>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button className="btn" onClick={() => filterItems(category)}>
              {category}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
