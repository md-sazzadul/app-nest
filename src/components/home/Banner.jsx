import heroImage from "../../assets/hero.png";

const Banner = () => {
  return (
    <section className="bg-base-200 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
          We Build <br />
          <span className="bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Productive Apps
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-500 text-lg">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {/* Google Play */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline flex items-center gap-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-6"
            />
            Google Play
          </a>

          {/* App Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline flex items-center gap-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="App Store"
              className="h-5"
            />
            App Store
          </a>
        </div>

        {/* Hero Image */}
        <div className="mt-16 flex justify-center">
          <img
            src={heroImage}
            alt="Hero Phone"
            className="max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
