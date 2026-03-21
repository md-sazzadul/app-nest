import { FiSearch } from "react-icons/fi";

const AppsToolbar = ({ total, search, setSearch }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      {/* Left: Total Apps */}
      <h3 className="text-base font-medium text-slate-700">
        ({total}) Apps Found
      </h3>

      {/* Right: Search Input */}
      <div className="w-full md:w-72 flex items-center border border-gray-300 rounded-lg bg-white px-3 gap-2 focus-within:border-gray-400 transition-colors">
        <FiSearch size={16} className="text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder="search Apps"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 py-2 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default AppsToolbar;
