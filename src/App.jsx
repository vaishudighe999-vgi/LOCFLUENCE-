import { Routes, Route } from "react-router-dom";

import Home from "./Navbar/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Links1 from "./pages/Links1";
import Creator from "./pages/Creator";
import Business from "./pages/Business";
import Political from "./pages/Political";
import Payment from "./pages/Payment";
import RoleSelection from "./pages/RoleSelection";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />


      {/* Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/links1" element={<Links1 />} />

      {/* Role Selection */}
      <Route path="/role-selection" element={<RoleSelection />} />

      {/* User Types */}
      <Route path="/creator" element={<Creator />} />
      <Route path="/business" element={<Business />} />
      <Route path="/political" element={<Political />} />

      {/* Payment */}
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;