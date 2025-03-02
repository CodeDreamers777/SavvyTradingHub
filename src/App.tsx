import { useState } from "react";
import { BarChart2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import ContactPage from "./components/ContactPage";
import AboutUsPage from "./components/AboutPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 overflow-x-hidden">
        {/* Navigation - Updated with better contrast */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-amber-900 backdrop-blur-md border-b border-amber-700/60">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <BarChart2 className="h-8 w-8 text-amber-200" />
                <span className="text-xl font-bold text-amber-50">
                  SavvyTradingHub
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                <Link
                  to="/#features"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/#courses"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Courses
                </Link>
                <Link
                  to="/#testimonials"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  to="/#pricing"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
                >
                  About Us
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-amber-300 text-amber-200 hover:bg-amber-800"
                >
                  Log in
                </Button>
                <Button
                  size="sm"
                  className="bg-amber-600 text-amber-50 hover:bg-amber-500"
                >
                  Sign up
                </Button>
              </div>
            </div>

            <button
              className="md:hidden text-amber-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu - Updated for better contrast */}
          {isMenuOpen && (
            <div className="md:hidden bg-amber-900 border-b border-amber-700/60 py-4">
              <nav className="container mx-auto px-4 flex flex-col gap-4">
                <Link
                  to="/#features"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/#courses"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to="/#testimonials"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  to="/#pricing"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="flex flex-col gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent border-amber-300 text-amber-200 hover:bg-amber-800"
                  >
                    Log in
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-amber-600 text-amber-50 hover:bg-amber-500"
                  >
                    Sign up
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
