import "./App.css";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Options from "./pages/options";
import Tour from "./pages/tour";
import TimeTravelMenu from "./pages/timeTravelMenu";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
function App() {
  const isAuthenticated = localStorage.getItem("token") != null;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/options"
            element={isAuthenticated ? <Options /> : <Navigate to="/login" />}
          />
          <Route
            path="/tour"
            element={isAuthenticated ? <Tour /> : <Navigate to="/login" />}
          />
          <Route
            path="/time-travel"
            element={
              isAuthenticated ? <TimeTravelMenu /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
