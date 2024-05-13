import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import channelService from "../services/channel";

const Channel = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [tagline, setTagline] = useState<string>();

  const [imageLoaded, setImageLoaded] = useState(false);

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
    <div
      className={`px-8 py-12 ${
        imageLoaded ? "flex" : "invisible" //vyn laddas lite hackigt innan kanalloggan har laddats, så jag döljer allt innan den är redo
      } flex-col gap-12`}
    >
      <div className="flex flex-col items-center gap-12 sm:flex-row">
        <img
          onLoad={() => setImageLoaded(true)}
          className="w-28"
          src={imageUrl}
          alt=""
        />
        <p className="text-slate-400 text-center sm:text-left">{tagline}</p>
      </div>
      <Outlet />
    </div>
  );
};

export default Channel;
