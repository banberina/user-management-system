import React, { useState, useEffect } from "react";

import CardList from "../../components/card-list/users-card-list.component";
import SearchBox from "../../components/search-box/search-box.component";

import { users } from "../../api/users";

import "./users.styles.css";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const UsersPage = () => {
  const [usersList, setUsersList] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [modal, setModal] = useState(false);

  const fetchUsers = async () => {
    await users.getUsersList().then((res) => {
      setUsersList(res.data);
      console.log(res.data);
    });
  };

  const filteredUsers = usersList.filter((user) =>
    user.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetchUsers();
  },[]);

  return (
    <div className="users-page">
      <SearchBox onSearchChange={onSearchChange} />
      <br/>
      <button className="special-font-subheader" onClick={toggle}>Create a new user</button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <br/>
      <br/>
      <CardList list={filteredUsers}/>
    </div>
  );
};

export default UsersPage;
