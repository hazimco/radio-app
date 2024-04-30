import { Routes, Route } from "react-router-dom";

import Start from "./components/Start";
import Channel from "./components/Channel";
import Programs from "./components/Programs";
import Episodes from "./components/Episodes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/channel" element={<Channel />}>
        <Route path="" element={<Programs />} />
        <Route path="episodes/:id" element={<Episodes />} />
      </Route>
    </Routes>
  );
};

export default App;
