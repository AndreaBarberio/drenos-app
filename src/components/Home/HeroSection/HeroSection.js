import { Link } from "react-router-dom";

function HeroSection({ ctaLink, ctaText }) {
  return (
    <section className="xl:text-right m-0 w-full hero-section p-8 bg-gradient-to-b from-slate-400 to-transparent text-center rounded-xl">
      <h1 className="text-4xl xl:text-left text-gray-300 text-shadow-xl shadow-black font-bold mb-4">Scopri i nostri servizi professionali</h1>
      <p className="text-lg xl:text-left text-gray-700 mb-6">
        Un sito versatile per ogni tipo di attività, pronto a essere tuo.
      </p>
      <Link to="/About" className="self-start bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
        Esplora ora
      </Link>
    </section>
  );
}

export default HeroSection;
