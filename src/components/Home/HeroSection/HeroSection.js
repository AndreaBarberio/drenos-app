import { Link } from "react-router-dom";

function HeroSection({ title, description, ctaLink, ctaText }) {
  return (
    <section className="section-column bg-gradient-to-b">
      <h1 className="heading-xl xl:text-left">{title}</h1>
      <p className="paragraph-xl">{description}</p>
      <Link to={ctaLink} className="btn-large">
        {ctaText}
      </Link>
    </section>

  );
}

export default HeroSection;
