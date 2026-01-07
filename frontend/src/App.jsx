import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import ChatPage from "./Pages/ChatPage";
import HomeSection from "./Pages/HomeSection";
import MoodPage from "./Pages/MoodPage";
import ScreeningPage from "./Pages/ScreeningPage";
import Footer from "./component/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element={<HomeSection/>}/>
        <Route path = "/chat" element={<ChatPage/>}/>
        <Route path = "/mood" element={<MoodPage/>}/>
        <Route path = "/screening" element={<ScreeningPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
