import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";

import programsService from "../../services/programs";
import Program from "./Program";

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
      <button
        onClick={handleBackClick}
        className="text-slate-400 flex gap-2 mb-4"
      >
        <ArrowLongLeftIcon className="size-6 text-slate-400" />
        Back
      </button>
      <h1 className="text-pink-300 text-3xl font-semibold mb-6 sm:text-6xl">
        Programs
      </h1>
      <ul className="divide-y divide-y-1 divide-slate-800">
        {programs.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </ul>
    </div>
  );
};

export default Programs;
