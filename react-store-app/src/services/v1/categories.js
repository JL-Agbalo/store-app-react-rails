import api from "../api";
import { endpoints } from "./endpoints";

export const categoriesService = {
  getAllCategories: () => api.get(endpoints.categories.list),
  getCategoryById: (id) => api.get(endpoints.categories.detail(id)),
};
