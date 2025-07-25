const TeamDisplayer = ({ team }) => {
  if (!Array.isArray(team) || team.length === 0) return null;

  return (
    <div className="mt-10 flex flex-wrap justify-center items-center gap-8 w-full relative mb-2 ">
      {team.map((member, idx) => (
        <div key={idx} className="flex flex-col items-center text-center group relative">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-800">{member.name}</p>
            <p className="text-xs text-gray-500">{member.role}</p>
          </div>
          <div className="absolute bottom-[-90px] w-64 p-2 bg-black/60 backdrop-blur-xl border-t border-gray-200 text-sm text-gray-200 shadow-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-auto">
            {member.bio}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamDisplayer;
