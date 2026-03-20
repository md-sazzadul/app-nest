import { useNavigate } from "react-router";
import errorImg from "../assets/error-404.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
      {/* Image */}
      <img src={errorImg} alt="404 Not Found" className="max-w-md w-full" />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mt-6">
        Oops, page not found!
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mt-3 max-w-md">
        The page you are looking for is not available.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-primary mt-6 px-6"
      >
        Go Back!
      </button>
    </div>
  );
};

export default NotFound;
