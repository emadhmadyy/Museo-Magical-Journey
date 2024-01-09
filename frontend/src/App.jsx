import "./App.css";
// import Nav from "./components/nav";
// import Footer from "./components/footer";
// import InfoCard from "./components/infoCard";
// import icon from "./assets/images/icons8-statue.png";
import Landing from "./pages/landing";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
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
