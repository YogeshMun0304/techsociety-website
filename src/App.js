import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Chapters from "./pages/chapters/Chapters"
import Events from "./pages/events/Events"
import Members from "./pages/members/Members"
import "./App.css";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2500);
  });

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <div className="loader-container">
          <ThreeDots
            height="100"
            width="200"
            radius="10"
            color="#fffefd"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/events" element={<Events />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </BrowserRouter>
      )}
      <Footer />
    </div>
  );
}

export default App;
