import "./App.css";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Options from "./pages/options";
import Tour from "./pages/tour";
import TimeTravelMenu from "./pages/timeTravelMenu";
import Popup from "./components/popup";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/options" element={<Options />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/time-travel" element={<TimeTravelMenu />} />
          <Route path="/pop-up" element={<Popup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
