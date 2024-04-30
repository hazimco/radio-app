import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div>
      <h1>Programs</h1>
      <Link to={"/channel/episodes/abc"}>Program ABC</Link>
    </div>
  );
};

export default Programs;
