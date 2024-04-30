import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import channelService from "../services/channel";

const Channel = () => {
  const [imageUrl, setImageUrl] = useState();
  const [tagline, setTagline] = useState();

  useEffect(() => {
    channelService
      .get()
      .then(({ channel }) => {
        setImageUrl(channel?.image);
        setTagline(channel?.tagline);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Channel</h1>
      <img src={imageUrl} alt="" />
      <p>{tagline}</p>
      <Outlet />
    </div>
  );
};

export default Channel;
