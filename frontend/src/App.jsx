import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import HomeSection from "./pages/HomeSection.jsx";
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
