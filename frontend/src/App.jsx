import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.jsx";
import ChatPage from "./Pages/ChatPage.jsx";
import HomeSection from "./Pages/HomeSection.jsx";
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
