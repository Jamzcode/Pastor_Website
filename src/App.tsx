import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Tour from "./pages/Tour";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery"

// import Image from "./components/Image";
// import Button from "./components/Button";
import Title from "./components/Title";
import NavigationBar from "./components/NavigationBar";
// import Text from "./components/Text";

function App() {
  return (
    <>
      {/* Website Title Component */}
      <Title />

      {/* Navigation Bar Component */}
      <NavigationBar />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/tour" element={<Tour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>

      {/* Text Box Component */}
      {/* <Image /> */}
      {/* Text Component */}
      {/* <Text /> */}

      {/* Button Component */}
      {/* <Button /> */}
    </>
  );
}
export default App;
