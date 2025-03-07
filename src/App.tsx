import "./index.css";

import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

import NavigationBar from "./components/NavigationBar";
import TabTitle from "./components/TabTitle";
import Title from "./components/Title";
import Footer from "./components/Footer.tsx";

function App() {
  // TODO: create text component for stylized text (e.g. italicized, font, etc.).
  // TODO: make ImageCard dynamic for pictures throughout the website.
  // TODO: make a dynamic/interactive GalleryComponent.
  // TODO: create input form component for user data.
  // TODO: make application MOBILE RESPONSIVE.

  return (
    <>
      {/* Website Title Component */}
      <TabTitle />
      <Title />

      {/* Navigation Bar Component */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
