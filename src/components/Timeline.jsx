import ExperienceItem from "./ExperienceItem";

const Timeline = () => {
  return (
    <div className="relative mt-20 w-full max-w-4xl">
      {/* LINE */}
      <div className="absolute left-2 top-0 w-0.5 h-full bg-teal-400"></div>

      <div className="space-y-10">
        <ExperienceItem title="Ewoosoft" role="Full Stack Dev" />
        <ExperienceItem title="Viettel" role="Frontend Dev" />
        <ExperienceItem title="FPT Software" role="Frontend Dev" />
      </div>
    </div>
  );
};

export default Timeline;
