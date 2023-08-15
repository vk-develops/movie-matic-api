import React from "react";
import NavBar from "./Containers/NavBar/Navbar";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Footer from "./Containers/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </React.Fragment>
    );
}

export default App;
