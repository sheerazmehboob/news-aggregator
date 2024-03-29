// CategoryTabs.jsx
import React from "react";

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex overflow-x-auto gap-4 md:gap-8 px-5 md:px-10 border-2 mx-2 md:mx-10 border-gray-600 py-4 rounded">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 capitalize rounded-md ease-in-out duration-200 ${
            selectedCategory === category ? "font-bold bg-purple-700 scale-125" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
