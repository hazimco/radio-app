import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import programsService from "../../services/programs";
import Program from "./Program";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";
import DividerList from "../../components/DividerList";

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
      <DividerList>
        {programs.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </DividerList>
    </div>
  );
};

export default Programs;
