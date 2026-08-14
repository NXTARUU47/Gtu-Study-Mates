import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Contact from "./components/Contact";

import Semester1 from "./Semesters/Semester1";
import Semester2 from "./Semesters/Semester2";
import Semester3 from "./Semesters/Semester3";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-1 pt-[70px] md:pt-[78px]">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/semester-1" element={<Semester1 />} />
          <Route path="/semester-2" element={<Semester2 />} />
          <Route path="/semester-3" element={<Semester3 />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;