import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Courses, Home, Login, Register, Lessons } from "../Pages";
import Profile from "../Pages/Profile";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>
    </div>
  );
};

export { AppRouter };
