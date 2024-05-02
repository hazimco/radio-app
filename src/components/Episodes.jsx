import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import episodesService from "../services/episodes";
import { isDate, getDateMillis } from "../utils/helper";

const Episode = ({ episode }) => {
  return (
    <li>
      <img src={episode.imageurl} alt="" />
      <div>{episode.title}</div>
      <div>{episode.description}</div>
      <audio
        controls
        src={episode.listenpodfile?.url || episode.broadcast?.broadcastfiles}
      ></audio>
    </li>
  );
};
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

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>Episodes</h1>
      <Filter filterText={filterText} handleFilterChange={handleFilterChange} />
      <ul>
        {filteredEpisodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </ul>
    </div>
  );
};

const Filter = ({ filterText, handleFilterChange }) => {
  return (
    <>
      <h4>Filter</h4>
      <input
        type="text"
        placeholder="Enter a keyword or date"
        value={filterText}
        onChange={handleFilterChange}
      />
    </>
  );
};

export default Episodes;
