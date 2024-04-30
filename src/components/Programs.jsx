import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import programsService from "../services/programs";

const Program = ({ program }) => {
  return (
    <Link to={`/channel/episodes/${program.id}`}>
      <li>
        <img src={program.programimage} alt="" />
        <div>{program.name}</div>
        <div>{program.description}</div>
      </li>
    </Link>
  );
};

const Programs = ({ channelId }) => {
  const [programs, setPrograms] = useState([]);

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
      <ul>
        {programs.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </ul>
    </div>
  );
};

export default Programs;
