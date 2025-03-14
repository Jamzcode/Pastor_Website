import "./index.css";

import { Routes, Route } from "react-router-dom";

import About from "./pages/About/About.tsx";
import Mission from "./pages/Mission/Mission.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Gallery from "./pages/Gallery/Gallery.tsx";
import Home from "./pages/Home/Home.tsx";

import NavigationBar from "./components/NavigationBar/NavigationBar.tsx";
import TabTitle from "./components/TabTitle";
import Title from "./components/Title/Title.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="top-bar">
          <Title />
          <NavigationBar />
        </div>
        <TabTitle />

        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
