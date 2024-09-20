import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import About from "./pages/About";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useContext(AuthContext);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
