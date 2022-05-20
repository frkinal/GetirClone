import { useState, useEffect } from "react";

import productData from "../api/product.json";
import ProductCard from "./ui/ProductCard";

export default function Favorites() {
  const [products, seProducts] = useState([]);

  useEffect(() => {
    seProducts(productData);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="w-10/12 mx-auto">
        <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
        <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
          {products.length &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
