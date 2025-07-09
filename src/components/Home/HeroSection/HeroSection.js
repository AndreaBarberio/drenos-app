function HeroSection() {
  return (
    <section className="xl:text-right m-0 w-full hero-section p-8 bg-gradient-to-b from-slate-400 to-transparent text-center rounded-xl">
      <h1 className="text-4xl xl:text-left text-gray-300 text-shadow-xl shadow-black font-bold mb-4">Scopri i nostri servizi professionali</h1>
      <p className="text-lg xl:text-left text-gray-700 mb-6">
        Un sito versatile per ogni tipo di attività, pronto a essere tuo.
      </p>
      <button className="items-center bg-blue-600 w-fit text-white px-6 py-2 rounded-xl hover:bg-blue-900 transition">
        Esplora ora
      </button>
    </section>
  );
}

export default HeroSection;
