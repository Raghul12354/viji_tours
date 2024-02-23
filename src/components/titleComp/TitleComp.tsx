const TitleComp = ({
  subtitles,
  title,
  classProp,
}: {
  subtitles: string;
  title: string;
  classProp: string;
}) => {
  return (
    <div className={`${classProp} grid grid-cols-1 gap-4 uppercase`}>
      <h6 className="text-gray-500 text-sm md:text-base font-semibold">
        {subtitles}
      </h6>
      <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
      <span className="bg-yellow-400 h-[5px] w-16 mt-2"></span>
    </div>
  );
};

export default TitleComp;