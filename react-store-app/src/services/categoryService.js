import { categories } from "../data/products/categories";

export const categoryService = {
  getAllCategories: () => categories,

  getCategoryById: (id) => {
    return categories.find((category) => category.id === id) || null;
  },
};
