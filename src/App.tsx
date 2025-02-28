import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

import Title from "./components/Title";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      {/* Website Title Component */}
      <Title />

      {/* Navigation Bar Component */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}
export default App;
