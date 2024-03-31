import React, { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";

const CategoryTabs = () => {
  const { categories, category, setCategory } = useContext(CategoryContext);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="flex overflow-x-auto gap-4 md:gap-8 px-2 mx-2 md:mx-0 md:px-10 border-2 border-gray-600 py-4 rounded mb-5">
      {categories.map((categoryName, index) => (
        <button
          key={index}
          onClick={() => handleCategoryChange(categoryName)}
          className={`px-4 py-2 capitalize rounded-md ease-in-out duration-200 ${
            category === categoryName ? "font-bold bg-purple-700 scale-125" : ""
          }`}
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;