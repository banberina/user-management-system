import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import NavBar from "./components/navbar/navbar.component";
import UsersPage from "./pages/users/users.component";
import CategoriesPage from "./pages/categories/categories.component";
import NotFoundPage from "./pages/404/not-found.component";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
