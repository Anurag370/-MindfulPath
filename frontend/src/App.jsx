import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import ChatPage from "./Pages/ChatPage";
import HomeSection from "./Pages/HomeSection";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element={<HomeSection/>}/>
        <Route path = "/chat" element={<ChatPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
