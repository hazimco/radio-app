import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import programsService from "../../services/programs";
import Program from "./Program";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";

const Programs = ({ channelId }) => {
  const [programs, setPrograms] = useState([]);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    let componentIsMounted = true;
    programsService
      .getPrograms(channelId)
      .then(({ programs }) => {
        if (componentIsMounted) {
          setPrograms(programs);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      componentIsMounted = false;
    };
  }, [channelId]);

  return (
    <div className="w-full">
      <BackButton handleBackClick={handleBackClick} />
      <PageTitle>Programs</PageTitle>
      <ul className="divide-y divide-y-1 divide-slate-800">
        {programs.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </ul>
    </div>
  );
};

export default Programs;
