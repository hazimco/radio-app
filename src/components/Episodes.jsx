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

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>Episodes</h1>
      <ul>
        {episodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </ul>
    </div>
  );
};

export default Episodes;
