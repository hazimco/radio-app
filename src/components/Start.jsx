import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-pink-300 text-6xl sm:text-8xl font-semibold">
        Radio app
      </h1>
      <Link
        to={"/channel"}
        className="text-gray-100 text-center bg-gradient-to-r from-pink-700 to-purple-700 rounded-lg px-6 py-3"
      >
        Get started
      </Link>
    </div>
  );
};

export default Start;
