import { Link } from "react-router-dom";
import Tag from "../../Tag/Tag";

function FeaturedProduct({ title, description, image, ctaText, ctaLink, tags = [] }) {
  return (
    <div className="featured-container">
      <img src={image} alt={title} className="featured-image" />
      <div className="featured-content">
        <div>
          <h2 className="heading-lg mb-2">{title}</h2>
          <p className="text-accent mb-4">{description}</p>
          <Tag tags={tags} />
          <Link to={ctaLink} className="btn-primary self-center md:self-start">
            {ctaText}
          </Link>
        </div>

      </div>
    </div>
  );
}

export default FeaturedProduct;
