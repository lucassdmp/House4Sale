import NavbarMenu from "./components/NavbarMenu";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
//import all components for react router 6.3
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterMenu from "./components/FooterMenu";
import CatalogPage from "./components/CatalogPage";
import SellWithUs from "./components/SellWithUs";
import Admin from "./components/Admin";


function App() {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/sellwithus" element={<SellWithUs />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      <FooterMenu />
    </Router>
  );
}

export default App
