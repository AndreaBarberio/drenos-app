import logo from "../../../assets/drenos/logo.png"
const AboutHeader = ({ title, description }) => (
  <section className="section-show text-center items-center">
    <h1 className="heading-s mb-2">{title}</h1>
    <p className="paragraph-xl max-w-2xl text-center">{description}</p>
    <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-2xl">
      <img src={logo} alt="Chi siamo" className="w-full h-full object-cover" />
    </div>
  </section>
);

export default AboutHeader;
