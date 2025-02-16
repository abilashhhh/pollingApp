/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import LoginForm from "./pages/Auth/LoginForm.jsx";
import SignUpForm from "./pages/Auth/SignUpForm.jsx";
import Home from "./pages/Dashboard/Home.jsx";
import CreatePoll from "./pages/Dashboard/CreatePoll.jsx";
import MyPolls from "./pages/Dashboard/MyPolls.jsx";
import VotedPolls from "./pages/Dashboard/VotedPolls.jsx";
import Bookmarks from "./pages/Dashboard/Bookmarks.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/signUp" exact element={<SignUpForm />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/create-polls" exact element={<CreatePoll />} />
          <Route path="/my-polls" exact element={<MyPolls />} />
          <Route path="/bookmarked" exact element={<Bookmarks />} />
          <Route path="/voted-polls" exact element={<VotedPolls />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () => {
  // check for the token in localstorage
  const isAuthenticated = !!localStorage.getItem("token");
  // Redirect to dashboard if authenticated, else to login page
  isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};
