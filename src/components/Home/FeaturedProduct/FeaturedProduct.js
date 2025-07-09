// src/components/Home/FeaturedProduct/FeaturedProduct.jsx

import { Link } from "react-router-dom";

function FeaturedProduct({ title, description, image, ctaText, ctaLink, tags = [] }) {
  return (
    <div className="flex flex-col  md:flex-row rounded-2xl overflow-hidden" S>
      <img src={image} alt={title} className="w-full md:w-1/2 h-64 object-cover rounded-xl" />

      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span key={tag} className="text-sm px-2 py-1 bg-slate-800 text-white rounded-xl">{tag}</span>
              ))}
            </div>
          )}
        </div>
        <Link to={ctaLink} className="self-start bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProduct;
