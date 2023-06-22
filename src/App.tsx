import NavbarMenu from "./components/NavbarMenu";
import HomePage from "./components/HomePage";
//import all components for react router 6.3
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterMenu from "./components/FooterMenu";
import CatalogPage from "./components/CatalogPage";


function App() {
  return (
    <>
      <NavbarMenu />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/catalog" element={<CatalogPage/>} />
          <Route path="/sellwithus" element={<h1>sellwithus</h1>} />
        </Routes>
      </Router>
      <FooterMenu/>
    </>
  );
}

export default App
