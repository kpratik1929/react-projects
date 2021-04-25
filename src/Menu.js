import React from "react";

const Menu = ({ items }) => {
  return (
    <section>
      {items.map((singleItem) => {
        const { id, img, title, price, desc } = singleItem;
        return (
          <div key={id}>
            <img src={img} alt="default" />
            <h3>{title}</h3>
            <h3>{price}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
