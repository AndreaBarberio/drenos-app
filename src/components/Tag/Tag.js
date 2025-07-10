function Tag({ tags = [] }) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, i) => (
        <span key={i} className="text-sm px-2 py-1 bg-slate-800 text-white rounded-xl">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tag;
