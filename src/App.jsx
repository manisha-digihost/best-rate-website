import { useState } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Footer from "./layouts/Footer";
import { Cta } from "./layouts/Cta";
import { Blogsection } from "./layouts/Cta";
import { Oneclick } from "./layouts/Cta";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Oneclick/>
      <Blogsection/>
      <Cta/>
      <Footer/>
      {/* <h2>Best Rate Website</h2> */}
    </>
  );
}

export default App;
