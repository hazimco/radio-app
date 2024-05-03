import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Start from "./pages/Start";
import Channel from "./pages/Channel";
import Programs from "./components/Programs";
import Episodes from "./components/Episodes";

const App = () => {
  const [channelId, setChannelId] = useState("132");

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/channel" element={<Channel />}>
        <Route path="" element={<Programs channelId={channelId} />} />
        <Route path="episodes/:programId" element={<Episodes />} />
      </Route>
    </Routes>
  );
};

export default App;
