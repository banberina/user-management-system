import axios from "axios";
import { BASE_URL } from "../utils/utils";

export const categories = {
    getCategoriesList: () => axios.get(`${BASE_URL}/categories`),
    createCategory: () => axios.post(`${BASE_URL}/categories/create`),
    deleteCategory: () => axios.delete(`${BASE_URL}/categories/:cID`),
}

