import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

const UsersCardList = ({list}) => (
  <div className="card-list">
    {list.map(one => (
      <Card key={one._id} img={`https://robohash.org/${one._id}?set=set5&size=180x180`} name={one.name} parameter1={`Email: ${one.email}`} parameter2={`Category: ${one.category.category}`}/>
    ))}
  </div>
);

export default UsersCardList;