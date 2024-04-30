import { Routes, Route } from "react-router-dom";

import Start from "./components/Start";
import Programs from "./components/Programs";
import Episodes from "./components/Episodes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/channel" element={<Programs />} />
      <Route path="/channel/episodes/:id" element={<Episodes />} />
    </Routes>
  );
};

export default App;
