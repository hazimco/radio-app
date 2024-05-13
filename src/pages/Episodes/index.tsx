import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import episodesService from "../../services/episodes";
import { isDate, getDateMillis } from "../../utils/helper";
import Episode from "./Episode";
import Filter from "./Filter";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";
import DividerList from "../../components/DividerList";

import { Episode as EpisodeType } from "../../types/global";

const Episodes = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [filterText, setFilterText] = useState("");

  const { programId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/channel");
  };

  useEffect(() => {
    if (typeof programId !== "string") return;

    let componentIsMounted = true;
    episodesService
      .getEpisodes(programId)
      .then(({ episodes }) => {
        if (componentIsMounted) {
          setEpisodes(episodes);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      componentIsMounted = false;
    };
  }, [programId]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const filteredEpisodes = episodes.filter((episode) => {
    return isDate(filterText)
      ? getDateMillis(episode.publishdateutc) >= Date.parse(filterText)
      : episode.title.toLowerCase().includes(filterText.toLowerCase());
  });

  let filteredAndSortedEpisodes = [...filteredEpisodes];
  if (filterText) {
    filteredAndSortedEpisodes.sort((a, b) => {
      return isDate(filterText)
        ? getDateMillis(a.publishdateutc) - getDateMillis(b.publishdateutc)
        : a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
  }

  return (
    <div className="w-full">
      <BackButton handleBackClick={handleBackClick} />
      <PageTitle>Episodes</PageTitle>
      <Filter filterText={filterText} handleFilterChange={handleFilterChange} />
      <DividerList>
        {filteredAndSortedEpisodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </DividerList>
    </div>
  );
};

export default Episodes;
