import axios from "axios";
import { BASE_URL } from "../utils/utils";

export const users = {
    getUsersList: () => axios.get(`${BASE_URL}/users`),
    createUser: (body) => axios.post(`${BASE_URL}/users/create`, body),
    changeName: (uID, body) => axios.put(`${BASE_URL}/users/modifyname/${uID}`),
    changeEmail: (uID, body) => axios.put(`${BASE_URL}/users/modifyemail/${uID}`),
    changePassword: (uID, body) => axios.put(`${BASE_URL}/users/modifypassword/${uID}`),
    deleteUser: (uID) => axios.delete(`${BASE_URL}/users/${uID}`),
}
