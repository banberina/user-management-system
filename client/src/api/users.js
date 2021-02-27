import axios from "axios";
import { BASE_URL } from "../utils/utils";

export const users = {
  getUsersList: () => axios.get(`${BASE_URL}/users`),
  getOneUser: (uID) => axios.get(`${BASE_URL}/users/${uID}`),
  createUser: (body) => axios.post(`${BASE_URL}/users/create`, body),
  changeName: (uID, body) =>
    axios.put(`${BASE_URL}/users/modifyname/${uID}`, body),
  changeEmail: (uID, body) =>
    axios.put(`${BASE_URL}/users/modifyemail/${uID}`, body),
  changePassword: (uID, body) =>
    axios.put(`${BASE_URL}/users/modifypassword/${uID}`, body),
  changeCategory: (uID, body) =>
    axios.put(`${BASE_URL}/users/modifycategory/${uID}`, body),
  deleteUser: (uID) => axios.delete(`${BASE_URL}/users/${uID}`),
};
