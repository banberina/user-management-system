import axios from "axios";
import { BASE_URL } from "../utils/utils";

export const categories = {
    getCategoriesList: () => axios.get(`${BASE_URL}/categories`),
    createCategory: (body) => axios.post(`${BASE_URL}/categories/create`, body),
    deleteCategory: (cID) => axios.delete(`${BASE_URL}/categories/${cID}`),
}

