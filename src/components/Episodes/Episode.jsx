const Episode = ({ episode }) => {
  return (
    <li className="py-6 sm:flex">
      <img className="w-24 h-24 mb-5" src={episode.imageurl} alt="" />
      <div className="sm:ml-6">
        <h2 className="text-white text-2xl mb-1">{episode.title}</h2>
        <p className="text-slate-400 text-sm mb-4">{episode.description}</p>
        <audio
          controls
          src={episode.listenpodfile?.url || episode.broadcast?.broadcastfiles}
          className="h-10 w-full sm:w-1/2"
        ></audio>
      </div>
    </li>
  );
};

export default Episode;
