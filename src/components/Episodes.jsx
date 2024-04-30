import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import episodesService from "../services/episodes";

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

  const { programId } = useParams();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/channel");
  };

  useEffect(() => {
    episodesService
      .getEpisodes(programId)
      .then(({ episodes }) => {
        setEpisodes(episodes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [programId]);

  return (
    <div>
      <h1>Episodes</h1>
      <button onClick={handleBackClick}>Back</button>
      <ul>
        {episodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </ul>
    </div>
  );
};

export default Episodes;
