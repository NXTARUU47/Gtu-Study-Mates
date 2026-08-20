import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Semester1 from "./Semesters/Semester1";
import Semester2 from "./Semesters/Semester2";
import Semester3 from "./Semesters/Semester3";
import Semester4 from "./Semesters/Semester4";
import Semester5 from "./Semesters/Semester5";
import Semester6 from "./Semesters/Semester6";
import Semester7 from "./Semesters/Semester7";
import Semester8 from "./Semesters/Semester8";
import StudyMaterials from "./components/StudyMaterials";
import About from "./components/About";
import NotFound from "./components/NotFound";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  // List of all valid routes
  const validRoutes = [
    "/",
    "/aboutus",
    "/study-materials",
    "/semester-1",
    "/semester-2",
    "/semester-3",
    "/semester-4",
    "/semester-5",
    "/semester-6",
    "/semester-7",
    "/semester-8",
    "/contact",
  ];

  // Check if current path matches any valid route
  const isValidRoute = validRoutes.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <ScrollToTop />
      
      {/* Show Header only on valid routes */}
      {isValidRoute && <Header />}

      {/* Remove padding-top on 404 page so it centers nicely */}
      <main className={`flex-1 ${isValidRoute ? "pt-[70px] md:pt-[78px]" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/semester-1" element={<Semester1 />} />
          <Route path="/semester-2" element={<Semester2 />} />
          <Route path="/semester-3" element={<Semester3 />} />
          <Route path="/semester-4" element={<Semester4 />} />
          <Route path="/semester-5" element={<Semester5 />} />
          <Route path="/semester-6" element={<Semester6 />} />
          <Route path="/semester-7" element={<Semester7 />} />
          <Route path="/semester-8" element={<Semester8 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Show Footer only on valid routes */}
      {isValidRoute && <Footer />}
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;