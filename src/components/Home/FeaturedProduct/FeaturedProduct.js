// src/components/Home/FeaturedProduct/FeaturedProduct.jsx

import { Link } from "react-router-dom";
import Tag from "../../Tag/Tag";
function FeaturedProduct({ title, description, image, ctaText, ctaLink, tags = [] }) {
  return (
    <div className="flex flex-col w-full self-center md:flex-row rounded-2xl overflow-hidden">
      <img src={image} alt={title} className="w-full md:w-1/2 h-64 object-cover rounded-xl" />

      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <Tag tags={tags} />
        </div>
        <Link to={ctaLink} className="self-start bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProduct;
