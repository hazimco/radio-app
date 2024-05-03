import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import episodesService from "../../services/episodes";
import { isDate, getDateMillis } from "../../utils/helper";
import Episode from "./Episode";
import Filter from "./Filter";
import BackButton from "../../components/BackButton";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [filterText, setFilterText] = useState("");

  const { programId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/channel");
  };

  useEffect(() => {
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

  const handleFilterChange = (event) => {
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
      <h1 className="text-pink-300 text-3xl font-semibold mb-6 sm:text-6xl">
        Episodes
      </h1>
      <Filter filterText={filterText} handleFilterChange={handleFilterChange} />
      <ul className="divide-y divide-y-1 divide-slate-800">
        {filteredAndSortedEpisodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </ul>
    </div>
  );
};

export default Episodes;
