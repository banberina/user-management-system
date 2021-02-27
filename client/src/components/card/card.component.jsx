import React from "react";
import { Button } from "reactstrap";

import "./card.styles.css";

const Card = ({ name, parameter1, parameter2, img, del, id }) => (
  <div className="card-container">
    <Button color="info">Edit</Button>
    <Button color="danger" onClick={()=>del(id)}>Delete</Button>
    <img alt="img" src={img} />
    <h2 className="special-font"> {name} </h2>
    <h3 className="special-font-subheader"> {parameter1} </h3>
    <h3 className="special-font-subheader"> {parameter2} </h3>
  </div>
);

export default Card;
