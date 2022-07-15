import React from "react";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import {BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forum from "./Pages/Forum";
import Question from "./Pages/Question";
import NotFound from "./Pages/NotFound.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div data-theme="dracula">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {!isLoggedIn ? (<>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /></>
        ): (<>
          <Route path="profile" element={<Home />} />
          <Route path="forum" element={<Forum />} />
          <Route path="/question/:id" element={<Question />} />
        </>)}
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
