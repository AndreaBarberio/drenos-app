// components/About/DynamicSections.jsx
const DynamicSections = ({ sections }) => {
  if (!Array.isArray(sections) || sections.length === 0) return null;

  return (
    <section className="flex flex-col gap-12">
      {sections.map(({ image, title, description, tags }, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-8`}
        >
          <div className="flex-1 ">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-3xl shadow-md" />
          </div>
          <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
            <h2 className="heading-s ">{title}</h2>
            <p className="paragraph-xl text-center">{description}</p>
            {Array.isArray(tags) && tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DynamicSections;
