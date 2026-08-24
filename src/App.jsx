import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
