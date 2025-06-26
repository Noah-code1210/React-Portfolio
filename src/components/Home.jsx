import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Experience from "./Experience";
import Technology from "./Technology";
import Projects from "./Projects";
import Footer from "./Footer";
import { ScrollProvider } from "../contexts/ScrollContext.js"; // <--- IMPORT THE PROVIDER HERE

function Home() {
  return (
    <ScrollProvider> {/* <--- WRAP YOUR COMPONENTS WITH THE PROVIDER */}
      <Nav />
      <Header />
      <Experience />
      <Technology />
      <Projects />
      <Footer />
    </ScrollProvider>
  );
}

export default Home;
