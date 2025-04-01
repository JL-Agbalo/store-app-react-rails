import React from "react";
import { categoryService } from "../../../services/categoryService";

function ProductFilter({ onFilterChange, selectedCategory }) {
  const categories = categoryService.getAllCategories();

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              selectedCategory === category.id
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default ProductFilter;
