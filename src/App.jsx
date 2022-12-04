import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobasStyles/GlobalStyles";
import { Navbar } from "./components/Navbar/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
