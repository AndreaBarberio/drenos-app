import testimonials from "../../../data/testimonialsData";
import StarRating from "./StarRating/Stars";

export default function Testimonials() {
  return (
    <section className="flex flex-col w-full mt-12 rounded-xl shadow-inner">
      <h2 className="w-full text-2xl font-bold text-center mb-8 text-gray-800">Cosa dicono i nostri clienti</h2>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (

          <div
            key={i}
            className="flex flex-col w-full bg-gradient-to-b from-slate-400 to-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <StarRating rating={t.rating} />
              </div>
            </div>
            <p className="text-gray-700 italic">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
