const AppsToolbar = ({ total, search, setSearch }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      {/* Left: Total Apps */}
      <h3 className="text-lg font-semibold text-slate-700">
        ({total}) Apps Found
      </h3>

      {/* Right: Search Input */}
      <div className="w-full md:w-80">
        <input
          type="text"
          placeholder="Search Apps"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
    </div>
  );
};

export default AppsToolbar;
