import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Campaigns from "./pages/Campaigns";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;