import React, { useState, useEffect } from "react";

import { useLocation, withRouter } from "react-router-dom";

import { users } from "../../api/users";
import { categories } from "../../api/categories";

import { toast } from "react-toastify";

import {
  Card,
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  Container,
} from "reactstrap";

const ChangeProfileDataCard = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);

  const [user, setUser] = useState("");

  const location = useLocation();

  const fetchUser = async () => {
    await users
      .getOneUser(location.pathname.split("/")[2])
      .then((res) => setUser(res.data));
  };

  const fetchCategories = async () => {
    await categories.getCategoriesList().then((res) => {
      setCategoriesList(res.data);
    });
  };

  useEffect(() => {
    fetchUser();
    fetchCategories();
  }, []);

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setName(() => ({
      [name]: value,
    }));

    setEmail(() => ({
      [name]: value,
    }));

    setCategory(() => ({
      [name]: value,
    }));

    setPassword(() => ({
      [name]: value,
    }));
  };

  const handleNameSubmit = async (event) => {
    event.preventDefault();
    await users
      .changeName(location.pathname.split("/")[2], name)
      .then(() => {
        window.location.reload();
        toast.success("You've changed your name!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    await users
      .changeEmail(location.pathname.split("/")[2], name)
      .then(() => {
        toast.success("You've changed your name!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCategorySubmit = async (event) => {
    event.preventDefault();
    await users
      .changeCategory(location.pathname.split("/")[2], name)
      .then(() => {
        toast.success("You've changed your name!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    await users
      .changePassword(location.pathname.split("/")[2], name)
      .then(() => {
        toast.success("You've changed your name!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-up-form">
      <br />
      <Container fluid="sm">
        <Card body inverse color="info" style={{ opacity: "90%" }}>
          <h2 className="special-font-subheader" style={{ textAlign: "left" }}>
            Change profile info
          </h2>
          <hr />
          <Row>
            <Col>
              <Form className="form" onSubmit={handleNameSubmit}>
                <FormGroup>
                  <Input
                    bsSize="sm"
                    type="text"
                    name="name"
                    id="name"
                    placeholder={user.name}
                    onChange={handleInput}
                  />
                </FormGroup>
                <Button
                  className="special-font-subheader"
                  color="warning"
                  size="sm"
                >
                  Change Name
                </Button>
              </Form>
            </Col>
            <Col>
              <Form className="form" onSubmit={handleEmailSubmit}>
                <FormGroup>
                  <Input
                    bsSize="sm"
                    type="email"
                    name="email"
                    id="email"
                    placeholder={user.email}
                    onChange={handleInput}
                  />
                </FormGroup>{" "}
                <Button
                  className="special-font-subheader"
                  color="warning"
                  size="sm"
                >
                  Change Email
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
      <Container fluid="sm">
        <Card body inverse color="info" style={{ opacity: "90%" }}>
          <h2 className="special-font-subheader" style={{ textAlign: "left" }}>
            Change category
          </h2>{" "}
          <hr />{" "}
          <Form className="form" onSubmit={handleCategorySubmit}>
            <FormGroup>
              <Input
                required={true}
                bsSize="sm"
                type="select"
                name="category"
                id="category"
                onChange={handleInput}
              >
                {categoriesList.map((one) => (
                  <option value={one._id}>{one.category}</option>
                ))}
              </Input>
            </FormGroup>{" "}
            <Button
              className="special-font-subheader"
              color="warning"
              size="sm"
            >
              Change category
            </Button>
          </Form>
        </Card>
      </Container>
      <Container fluid="sm">
        <Card body inverse color="info" style={{ opacity: "90%" }}>
          <h2 className="special-font-subheader" style={{ textAlign: "left" }}>
            Change password
          </h2>{" "}
          <hr />{" "}
          <Form className="form" onSubmit={handlePasswordSubmit}>
            <FormGroup>
              <Input
                bsSize="sm"
                minLength="5"
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange={handleInput}
              />
            </FormGroup>{" "}
            <Button className="special-font-subheader" color="danger" size="sm">
              Change password
            </Button>
          </Form>
        </Card>
      </Container>
      <br />
    </div>
  );
};

export default withRouter(ChangeProfileDataCard);
