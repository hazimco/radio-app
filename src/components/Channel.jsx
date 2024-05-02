import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import channelService from "../services/channel";

const Channel = () => {
  const [imageUrl, setImageUrl] = useState();
  const [tagline, setTagline] = useState();

  useEffect(() => {
    let componentIsMounted = true;
    channelService
      .get()
      .then(({ channel }) => {
        if (componentIsMounted) {
          setImageUrl(channel?.image);
          setTagline(channel?.tagline);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      componentIsMounted = false;
    };
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="" />
      <p>{tagline}</p>
      <Outlet />
    </div>
  );
};

export default Channel;
