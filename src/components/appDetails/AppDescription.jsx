const AppDescription = ({ description }) => {
  return (
    <div className="mt-8 sm:mt-12">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
        Description
      </h2>

      <div className="space-y-4 sm:space-y-6 text-gray-500 leading-relaxed text-sm sm:text-base">
        {description.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default AppDescription;
