import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import GetInTouch from "./pages/GetInTouch";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

import Title from "./components/Title";
import NavigationBar from "./components/NavigationBar";

function App() {
  // TODO: create text component for stylized text (e.g. italicized, font, etc.).
  // TODO: make ImageCard dynamic for pictures throughout the website.
  // TODO: make a dynamic/interactive GalleryComponent.
  // TODO: create input form component for user data.
  // TODO: make application MOBILE RESPONSIVE.
  
  
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
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </>
  );
}
export default App;
