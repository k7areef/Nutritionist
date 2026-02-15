// Routes:
import { Routes, Route } from "react-router-dom";
// Pages:
import AboutPage from "@pages/AboutPage";
import BlogsPage from "@pages/BlogsPage";
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import PricingPage from "@pages/PricingPage";
import ProcessPage from "@pages/ProcessPage";
import TeamMembersPage from "@pages/TeamMembersPage";
// Common Components:
import NavigationBar from "@components/layout/NavigationBar";
import Footer from "@components/layout/Footer";

function App() {
  return (
    <div className="App bg-green-97 text-grey-15 min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamMembersPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;