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
    <div className="p-14 flex flex-col gap-12 items-center">
      <img className="w-28" src={imageUrl} alt="" />
      <p className="text-slate-400 text-center">{tagline}</p>
      <Outlet />
    </div>
  );
};

export default Channel;
