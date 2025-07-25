// components/About/Certifications.jsx
const Certifications = ({ certifications }) => {
  if (!Array.isArray(certifications) || certifications.length === 0) return null;

  return (
    <section className="section-light items-center mb-4 ">
      <h2 className="heading-s mb-4">Certificazioni</h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {certifications.map((cert, idx) => (
          <li key={idx} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm shadow">
            ✅ {cert}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
