import { FiPlus } from "react-icons/fi";

export default function ProductCard({ product: { title, image, price, alt } }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center ">
      <button className="absolute top-0 right-0 w-8 h-8 border border-gray-200 rounded-lg text-brand-color hover:border-brand-color ">
        <FiPlus size={18} className="m-auto" />
      </button>
      <img src={image} alt={title} />
      <div className="text-brand-color">{price}</div>
      <div className="text-gray-900">{title}</div>
      <div className="text-gray-500">{alt}</div>
    </div>
  );
}
