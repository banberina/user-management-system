import React, { useState, useEffect } from "react";

import CardList from "../../components/card-list/categories-card-list.component";
import SearchBox from "../../components/search-box/search-box.component";

import { categories } from "../../api/categories";

const CategoriesPage = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [searchField, setSearchField] = useState("");

  const fetchCategories = async () => {
    await categories.getCategoriesList().then((res) => {
      setCategoriesList(res.data);
      console.log(res.data);
    });
  };

  const filteredCategories = categoriesList.filter((category) =>
    category.category.toLowerCase().includes(searchField.toLowerCase())
  );

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetchCategories();
  },[]);
  return (
    <div>
<SearchBox onSearchChange={onSearchChange} />
      <CardList list={filteredCategories}/>
    </div>
  );
};

export default CategoriesPage;
