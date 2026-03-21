const AppDescription = ({ description }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Description</h2>

      <div className="space-y-6 text-gray-500 leading-relaxed text-sm md:text-base">
        {description.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default AppDescription;
