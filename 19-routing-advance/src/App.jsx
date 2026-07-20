import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kid from "./pages/Kid";
import Notfound from "./pages/Notfound";
import Courses from "./pages/Courses";
import CoursesDetails from "./pages/CoursesDetails";
import Breadcrumb from "./Components/Breadcrumb";

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />}>
          <Route path="/Product/Men" element={<Men />} />
          <Route path="/Product/Women" element={<Women />} />
          <Route path="/Product/Kid" element={<Kid />} />
        </Route>
        <Route path="/Courses/" element={<Courses />} />
        <Route path="/Courses/:id" element={<CoursesDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
