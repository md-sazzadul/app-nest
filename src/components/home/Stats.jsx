const Stats = () => {
  return (
    <section className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Downloads */}
          <div className="flex flex-col items-center py-4">
            <p className="text-sm opacity-75 mb-1">Total Downloads</p>
            <p className="text-5xl font-extrabold tracking-tight">29.6M</p>
            <p className="text-xs opacity-60 mt-1">21% More Than Last Month</p>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-center py-4">
            <p className="text-sm opacity-75 mb-1">Total Reviews</p>
            <p className="text-5xl font-extrabold tracking-tight">906K</p>
            <p className="text-xs opacity-60 mt-1">46% More Than Last Month</p>
          </div>

          {/* Active Apps */}
          <div className="flex flex-col items-center py-4">
            <p className="text-sm opacity-75 mb-1">Active Apps</p>
            <p className="text-5xl font-extrabold tracking-tight">132+</p>
            <p className="text-xs opacity-60 mt-1">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
