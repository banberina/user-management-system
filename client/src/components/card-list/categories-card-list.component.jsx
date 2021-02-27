import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

const CategoriesCardList = ({ list, del }) => (
  <div className="card-list">
    {list.map((one) => (
      <Card
        key={one._id}
        id={one._id}
        del={del}
        name={one.category}
        img={`https://robohash.org/${one.id}?set=set2&size=180x180`}
        parameter1={`There are ${
          one.shapes.length
        } shapes in this category: ${one.shapes.map((url) => url.shape)}`}
      />
    ))}
  </div>
);

export default CategoriesCardList;
