const Stats = () => {
  return (
    <section className="bg-linear-to-r from-purple-600 to-indigo-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Downloads */}
          <div className="stat place-items-center">
            <div className="text-sm opacity-80">Total Downloads</div>
            <div className="text-5xl font-bold">29.6M</div>
            <div className="text-sm opacity-70">21% More Than Last Month</div>
          </div>

          {/* Reviews */}
          <div className="stat place-items-center">
            <div className="text-sm opacity-80">Total Reviews</div>
            <div className="text-5xl font-bold">906K</div>
            <div className="text-sm opacity-70">46% More Than Last Month</div>
          </div>

          {/* Active Apps */}
          <div className="stat place-items-center">
            <div className="text-sm opacity-80">Active Apps</div>
            <div className="text-5xl font-bold">132+</div>
            <div className="text-sm opacity-70">31 More Will Launch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
