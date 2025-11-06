import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ISWPLLanding from "./ISWPLLanding";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ISWPLLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}
