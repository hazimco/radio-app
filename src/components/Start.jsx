import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1>Radio app</h1>
      <Link to={"/channel"}>Get started</Link>
    </div>
  );
};

export default Start;
