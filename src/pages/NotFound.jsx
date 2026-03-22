import { useNavigate } from "react-router";
import errorImg from "../assets/error-404.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-6">
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-full max-w-55 sm:max-w-md"
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5 sm:mt-6">
        Oops, page not found!
      </h1>

      <p className="text-gray-500 mt-2 sm:mt-3 max-w-sm text-sm sm:text-base">
        The page you are looking for is not available.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors mt-4 sm:mt-5"
      >
        Go Back!
      </button>
    </div>
  );
};

export default NotFound;
