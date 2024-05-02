import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Start from "./components/Start";
import Channel from "./components/Channel";
import Programs from "./components/Programs";
import Episodes from "./components/Episodes";

const App = () => {
  const [channelId, setChannelId] = useState("132");

  return (
    <div className="bg-gray-900 h-screen flex justify-center">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/channel" element={<Channel />}>
          <Route path="" element={<Programs channelId={channelId} />} />
          <Route path="episodes/:programId" element={<Episodes />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
