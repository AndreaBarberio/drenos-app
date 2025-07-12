import servicesData from "../../../data/servicesData"
import ServiceCopy from "../../../data/serviceCopy";
function ServicesOverview() {
  return (
    <section className="w-full py-8 text-gray-800">
      <div className="mx-auto">
        {ServiceCopy.map((service, i) => <h2 key={i} className="text-2xl md:text-3xl font-bold text-center mb-12">
          {service.title}
        </h2>)}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="bg-slate-300 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
