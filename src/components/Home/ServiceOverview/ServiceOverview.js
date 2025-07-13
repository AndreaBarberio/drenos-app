import servicesData from "../../../data/servicesData";
import ServiceCopy from "../../../data/serviceCopy";

function ServicesOverview() {
  return (
    <section className="section-light">
      <div className="container">
        {ServiceCopy.map((service, i) => (
          <h2 key={i} className="heading-xxl">
            {service.title}
          </h2>
        ))}
        <div className="grid-services">
          {servicesData.map(({ icon, title, description }, i) => (
            <div key={i} className="card-service">
              <div className="card-icon">{icon}</div>
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default ServicesOverview;
