import { useNavigate } from "react-router";
import errorImg from "../../assets/App-Error.png";

const NoData = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-10 sm:py-16 px-4">
      <img
        src={errorImg}
        alt="No App Found"
        className="mx-auto w-full max-w-[200px] sm:max-w-xs"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5 sm:mt-6">
        OPPS!! APP NOT FOUND
      </h2>

      <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-sm mx-auto">
        The App you are requesting is not found on our system. Please try
        another apps.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors mt-4 sm:mt-5"
      >
        Go Back!
      </button>
    </div>
  );
};

export default NoData;
