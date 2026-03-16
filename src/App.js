import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AboutPage from "./Pages/About";

import Navbar from "./Components/Navbar";
// import FooterCTASection from "./Components/FooterCTASection";
import Footer from "./Components/Footer";
import ContactPage from "./Pages/Contactpage";
import ServicesPage from "./Pages/ServicesPage";
import ServiceDetails from "./Pages/ServiceDetails";
import BlogPage from "./Pages/Blogpage";





function App() {
  return (
    <Router>

      <Navbar></Navbar>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        <Route path="/contactpage" element={<ContactPage />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/blogs" element={<BlogPage />} />


      </Routes>
      {/* <FooterCTASection></FooterCTASection> */}
      <Footer></Footer>

    </Router>
  );
}

export default App;