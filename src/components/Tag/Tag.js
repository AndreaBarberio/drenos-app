function Tag({ tags = [] }) {
  if (tags.length === 0) return null;

  return (
    <div className="flex justify-center md:justify-start gap-2 mb-4 flex-wrap">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="text-sm px-2 py-1 bg-slate-800 text-white rounded-xl"
        >
          {/* Troncato su mobile, pieno su desktop */}
          <span className="block sm:hidden">
            {tag.length > 5 ? tag.slice(0, 5) + "..." : tag}
          </span>
          <span className="hidden sm:block">{tag}</span>
        </span>
      ))}
    </div>
  );
}

export default Tag;