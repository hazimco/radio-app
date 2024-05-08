import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import programsService from "../../services/programs";
import Program from "./Program";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";
import DividerList from "../../components/DividerList";
import useApiFetch from "../../hooks/useApiFetch";

const Programs = ({ channelId }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  // Jag hade först en useEffect för att hämta data (likt Channel och Episodes), men skapade en hook för att se hur det skulle kunna se ut.
  // Det blir kortare kod, men jag tycker att det blir lite fulare med useCallbacken.
  const cachedFunction = useCallback(
    () => programsService.getPrograms(channelId),
    [channelId]
  );
  const data = useApiFetch(cachedFunction);

  if (!data) return;

  const { programs } = data;

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
