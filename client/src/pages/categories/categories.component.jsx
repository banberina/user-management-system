import React, { useState, useEffect } from "react";

import CardList from "../../components/card-list/categories-card-list.component";
import SearchBox from "../../components/search-box/search-box.component";

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

const CategoriesPage = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    category: "",
  });

  const deleteCategory = async (cId) => {
    await categories.deleteCategory(cId).then(() => {
      window.location.reload();
    });
  };

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
    await categories
      .createCategory(input)
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

  const filteredCategories = categoriesList.filter((category) =>
    category.category.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>
      <SearchBox onSearchChange={onSearchChange} />
      <br />
      <button className="special-font-subheader" onClick={toggle}>
        Create a new category
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="special-font">
          Create category
        </ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={handleSubmit}>
            <FormGroup>
              <Label size="sm" for="category" className="special-font-subheader">
                Category Name
              </Label>
              <Input
                required={true}
                bsSize="sm"
                type="text"
                name="category"
                id="category"
                placeholder="premium"
                onChange={handleInput}
              />
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
      <br /> <CardList list={filteredCategories} del={deleteCategory}/>
    </div>
  );
};

export default CategoriesPage;
