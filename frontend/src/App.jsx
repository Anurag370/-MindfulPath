import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import ChatPage from "./pages/ChatPage";
import HomeSection from "./pages/HomeSection";
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
