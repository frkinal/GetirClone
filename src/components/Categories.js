import { useState, useEffect } from "react";

import categoriesData from "../api/Categories.json";

import CategoryCard from "./ui/CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <div className="w-full bg-white py-4">
      <div className="w-10/12 mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-10">
          {categories &&
            categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
