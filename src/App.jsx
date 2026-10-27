import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Campaigns from "./pages/Campaigns";
import Donate from "./pages/Donate";
import Donors from "./pages/Donors";
import Volunteers from "./pages/Volunteers";
import Ngos from "./pages/Ngos";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="donate" element={<Donate />} />
        <Route path="donors" element={<Donors />} />
        <Route path="volunteers" element={<Volunteers />} />
        <Route path="ngos" element={<Ngos />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
