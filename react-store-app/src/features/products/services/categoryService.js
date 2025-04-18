import { categories } from "../data/categoriesData";

export const categoryService = {
  getAllCategories: () => categories,

  getCategoryById: (id) => {
    return categories.find((category) => category.id === id) || null;
  },
};
