const ExperienceItem = ({ title, role, duration }) => {
  return (
    <div className="flex gap-6 group">
      {/* DOT */}
      <div className="relative">
        <div className="w-3 h-3 bg-teal-400 rounded-full mt-2"></div>

        {/* glow on hover */}
        <div className="absolute inset-0 w-3 h-3 bg-teal-400 rounded-full blur-md opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-lg font-semibold group-hover:text-teal-400 transition">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">{role}</p>

        {duration && <p className="text-gray-500 text-xs mt-1">{duration}</p>}
      </div>
    </div>
  );
};

export default ExperienceItem;
