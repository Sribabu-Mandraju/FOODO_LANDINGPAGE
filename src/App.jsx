import "./index.css";

import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blogs from './pages/blogs/Blogs'
import FoodDonationForm from "./pages/FoodDonation/FoodDonationForm";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<FoodDonationForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;