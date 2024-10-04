import { useState } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer/>
      {/* <h2>Best Rate Website</h2> */}
    </>
  );
}

export default App;
