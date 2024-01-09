import "./App.css";
// import Nav from "./components/nav";
// import Footer from "./components/footer";
// import InfoCard from "./components/infoCard";
// import icon from "./assets/images/icons8-statue.png";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Options from "./pages/options";
import Tour from "./pages/tour";
import TimeTravelMenu from "./pages/timeTravelMenu";
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
        </Routes>
      </BrowserRouter>
      {/* <Nav></Nav>
      <Footer></Footer>
      <InfoCard
        icon={icon}
        title="Title"
        description="sdfs awdaowdadn wqdidasjnasodada awdaasda "
      ></InfoCard> */}
    </>
  );
}

export default App;
