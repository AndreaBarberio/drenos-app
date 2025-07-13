import testimonials from "../../../data/testimonialsData";
import StarRating from "./StarRating/Stars";

export default function Testimonials() {
  return (
    <section className="section-light flex flex-col rounded-xl">
      <h2 className="heading-lg text-gray-800">Cosa dicono i nostri clienti</h2>
      <div className="grid-dispatcher">
        {testimonials.map((t, i) => (
          <div key={i} className="card-testimonial">
            <div className="testimonial-header">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <div>
                <h3 className="testimonial-name">{t.name}</h3>
                <StarRating rating={t.rating} />
              </div>
            </div>
            <p className="testimonial-text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>

  );
}
