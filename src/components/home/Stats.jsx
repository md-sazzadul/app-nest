const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 px-2">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-y-0 sm:divide-x divide-white/20">
          <div className="flex flex-col items-center py-3 sm:py-4">
            <p className="text-sm opacity-75 mb-1">Total Downloads</p>
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              29.6M
            </p>
            <p className="text-xs opacity-60 mt-1">21% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center py-3 sm:py-4 border-t sm:border-t-0 border-white/20">
            <p className="text-sm opacity-75 mb-1">Total Reviews</p>
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              906K
            </p>
            <p className="text-xs opacity-60 mt-1">46% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center py-3 sm:py-4 border-t sm:border-t-0 border-white/20">
            <p className="text-sm opacity-75 mb-1">Active Apps</p>
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              132+
            </p>
            <p className="text-xs opacity-60 mt-1">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
