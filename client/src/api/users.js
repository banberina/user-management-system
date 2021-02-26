import axios from "axios";
import { BASE_URL } from "../utils/utils";

export const users = {
    getUsersList: () => axios.get(`${BASE_URL}/users`),
    createUser: () => axios.post(`${BASE_URL}/users/create`),
    changeName: () => axios.put(`${BASE_URL}/users/modifyname/:uID`),
    changeEmail: () => axios.put(`${BASE_URL}/users/modifyemail/:uID`),
    changePassword: () => axios.put(`${BASE_URL}/users/modifypassword/:uID`),
    deleteUser: () => axios.delete(`${BASE_URL}/users/:uID`),
}
