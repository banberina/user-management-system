import React from "react";
import { Jumbotron, Container } from "reactstrap";

const NotFound = () => {
  return (
    <Jumbotron fluid>
      <Container color='info'>
        <h1 className="special-font">Error 404: Page not found</h1>
      </Container>
    </Jumbotron>
  );
};

export default NotFound;
