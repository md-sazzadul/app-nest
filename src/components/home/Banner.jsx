import heroImage from "../../assets/hero.png";

const Banner = () => {
  return (
    <section className="bg-base-200 pt-10 sm:pt-16 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight">
          We Build
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-1">
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          <span className="text-slate-800">Apps</span>
        </h1>

        <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base leading-relaxed px-2">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-7 flex-wrap px-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition text-xs sm:text-sm font-medium text-gray-700 shadow-sm"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Play_2022_icon.svg"
              alt="Google Play"
              className="h-4 sm:h-5 w-auto"
            />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition text-xs sm:text-sm font-medium text-gray-700 shadow-sm"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="App Store"
              className="h-4 sm:h-5 w-auto"
            />
            App Store
          </a>
        </div>

        <div className="mt-10 sm:mt-16 flex justify-center">
          <img
            src={heroImage}
            alt="Hero Phone"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
