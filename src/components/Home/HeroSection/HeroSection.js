import { Link } from "react-router-dom";

function HeroSection({ title, description, ctaLink, ctaText }) {
  return (
    <section className="flex flex-col text-center md:text-left w-full self-center p-8 bg-gradient-to-b from-slate-400 to-transparent rounded-xl">
      <h1 className="text-2xl md:text-4xl xl:text-left text-gray-300 text-shadow-xl shadow-black font-bold mb-4">{title}</h1>
      <p className="text-sm md:text-xl xl:text-left text-gray-700 mb-6">{description}</p>
      <Link to={ctaLink} className="w-fit self-center md:self-end bg-black text-white p-4 rounded hover:bg-gray-800 transition">
        {ctaText}
      </Link>
    </section>
  );
}

export default HeroSection;
