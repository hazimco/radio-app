import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import programsService from "../services/programs";

const Program = ({ program }) => {
  return (
    <li>
      <Link to={`/channel/episodes/${program.id}`}>
        <img src={program.programimage} alt="" />
        <div>{program.name}</div>
        <div>{program.description}</div>
      </Link>
    </li>
  );
};

const Programs = ({ channelId }) => {
  const [programs, setPrograms] = useState([]);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    programsService
      .getPrograms(channelId)
      .then(({ programs }) => {
        setPrograms(programs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [channelId]);

  return (
    <div>
      <h1>Programs</h1>
      <button onClick={handleBackClick}>Back</button>
      <ul>
        {programs.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </ul>
    </div>
  );
};

export default Programs;
