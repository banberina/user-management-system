import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import CardList from "../../components/card-list/users-card-list.component";
import SearchBox from "../../components/search-box/search-box.component";

import { users } from "../../api/users";
import { categories } from "../../api/categories";

import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { toast } from "react-toastify";

import "./users.styles.css";

const UsersPage = () => {
  const [usersList, setUsersList] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    category: "",
  });
  const [categoriesList, setCategoriesList] = useState([]);

  const fetchUsers = async () => {
    await users.getUsersList().then((res) => {
      setUsersList(res.data);
    });
  };

  const deleteUser = async (uId) => {
    await users.deleteUser(uId).then(() => {
      window.location.reload();
    });
  };

  const filteredUsers = usersList.filter((user) =>
    user.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const fetchCategories = async () => {
    await categories.getCategoriesList().then((res) => {
      setCategoriesList(res.data);
    });
  };

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await users
      .createUser(input)
      .then(() => {
        toast.success("You've successfully created new user!", {
          position: "top-center",
          autoClose: 2000,
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

  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetchUsers();
    fetchCategories();
  }, []);

  return (
    <div className="users-page">
      <SearchBox onSearchChange={onSearchChange} />
      <br />
      <button className="special-font-subheader" onClick={toggle}>
        Create a new user
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="special-font">
          Create user
        </ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={handleSubmit}>
            <FormGroup>
              <Label size="sm" for="name" className="special-font-subheader">
                Name
              </Label>
              <Input
                required={true}
                bsSize="sm"
                type="text"
                name="name"
                id="name"
                placeholder="John"
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <Label size="sm" for="email" className="special-font-subheader">
                Your email
              </Label>
              <Input
                required={true}
                bsSize="sm"
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <Label
                size="sm"
                for="password"
                className="special-font-subheader"
              >
                Password
              </Label>
              <Input
                required={true}
                bsSize="sm"
                minLength="5"
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <Label
                size="sm"
                for="category"
                className="special-font-subheader"
              >
                Category
              </Label>
              <Input
                required={true}
                bsSize="sm"
                type="select"
                name="category"
                id="category"
                onChange={handleInput}
              >
                {categoriesList.map((one) => (
                  <option>{one._id}</option>
                ))}
              </Input>
            </FormGroup>
            <Button
              type="submit"
              className="special-font-subheader"
              color="info"
              block
            >
              Confirm{" "}
            </Button>{" "}
          </Form>{" "}
        </ModalBody>
      </Modal>
      <br />
      <br />
      <CardList list={filteredUsers} del={deleteUser} />
    </div>
  );
};

export default withRouter(UsersPage);
